"use client";

import WalletConnect from "@/components/WalletConnect";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold text-orange-400 mb-4">
        ☕ CoffeeChain Protocol
      </h1>

      <p className="text-zinc-400 max-w-xl text-center mb-8">
        Blockchain-based supply chain transparency for Indonesian coffee.
        Immutable provenance. Verifiable history. Open data.
      </p>

      <div className="flex gap-4">
        <WalletConnect />
        <Link
          href="/app"
          className="px-6 py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700"
        >
          Enter App
        </Link>
        <a
          href="/whitepaper.pdf"
          className="px-6 py-3 rounded-lg border border-zinc-700"
        >
          Read Whitepaper
        </a>
      </div>
    </main>
  );
}
