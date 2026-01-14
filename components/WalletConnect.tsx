"use client";

import { useState } from "react";

// Add type definition for window.ethereum to fix TS errors
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string }) => Promise<string[]>;
    };
  }
}

export default function WalletConnect({
  onConnect,
}: {
  onConnect?: (address: string) => void;
}) {
  const [address, setAddress] = useState<string | null>(null);

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAddress(accounts[0]);
        if (onConnect) {
          onConnect(accounts[0]);
        }
      } catch (error) {
        console.error("Error connecting to MetaMask", error);
        alert("Failed to connect wallet.");
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this feature.");
    }
  }

  return (
    <button
      onClick={connect}
      className="px-6 py-3 rounded-xl bg-orange-500 text-black font-semibold hover:opacity-90"
    >
      {address ? `Connected: ${address.slice(0, 6)}...` : "Connect MetaMask"}
    </button>
  );
}
