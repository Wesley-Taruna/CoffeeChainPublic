"use client";

import { useState } from "react";
import { ethers, keccak256, toUtf8Bytes } from "ethers";
import { supabase } from "@/lib/supabase";
import { getSigner } from "@/lib/ethers";
import ABI from "@/lib/CoffeeChainABI.json";

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;

export default function SupplyForm({ wallet }: { wallet?: string }) {
  const [form, setForm] = useState({
    batchId: "",
    stage: "Harvesting",
    location: "",
    handler: "",
    description: "",
    temperature: "",
    humidity: "",
  });

  async function submit() {
    // 1. Hash data
    const payload = JSON.stringify(form);
    const dataHash = keccak256(toUtf8Bytes(payload));

    // 2. Submit on-chain
    const signer = await getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

    const tx = await contract.addRecord(
      form.batchId,
      form.stage,
      form.location,
      form.handler,
      dataHash
    );

    await tx.wait();

    // 3. Save off-chain
    await supabase.from("supply_records").insert({
      wallet_address: wallet,
      batch_id: form.batchId,
      stage: form.stage,
      location: form.location,
      handler: form.handler,
      description: form.description,
      temperature: form.temperature,
      humidity: form.humidity,
      tx_hash: tx.hash,
    });

    alert("Supply record added & verified on-chain");
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <h2 className="text-xl font-semibold mb-4">Add Supply Chain Record</h2>

      {["batchId", "location", "handler"].map((key) => (
        <input
          key={key}
          placeholder={key}
          className="w-full mb-3 p-3 bg-black border border-zinc-700 rounded"
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        />
      ))}

      <select
        className="w-full mb-3 p-3 bg-black border border-zinc-700 rounded"
        onChange={(e) => setForm({ ...form, stage: e.target.value })}
      >
        <option>Harvesting</option>
        <option>Processing</option>
        <option>Roasting</option>
        <option>Packaging</option>
        <option>Distribution</option>
      </select>

      <textarea
        placeholder="Process Description"
        className="w-full mb-3 p-3 bg-black border border-zinc-700 rounded"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <button
        onClick={submit}
        className="w-full py-3 bg-orange-500 text-black rounded-xl font-bold"
      >
        Submit & Sign
      </button>
    </div>
  );
}
