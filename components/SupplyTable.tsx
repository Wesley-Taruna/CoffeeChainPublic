"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SupplyTable() {
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    supabase
      .from("supply_records")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => setRows(data || []));
  }, []);

  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold mb-4">Global Supply Chain Feed</h2>

      {rows.map((r) => (
        <div
          key={r.id}
          className="p-4 mb-3 bg-zinc-900 border border-zinc-800 rounded-xl"
        >
          <div className="text-sm text-zinc-400">
            Batch {r.batch_id} — {r.stage}
          </div>
          <div className="font-mono text-xs mt-1">{r.tx_hash}</div>
          <a
            href={`https://sepolia.etherscan.io/tx/${r.tx_hash}`}
            target="_blank"
            className="text-orange-400 text-xs underline"
          >
            Verify on Etherscan
          </a>
        </div>
      ))}
    </div>
  );
}
