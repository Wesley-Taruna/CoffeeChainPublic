"use client";

import ExplorerTable from "@/components/ExplorerTable";
import Navbar from "@/components/Navbar";

export default function ExplorerPage() {
  return (
    <>
      <Navbar />
      <main className="p-8 bg-black min-h-screen text-white">
        <h2 className="text-2xl font-semibold mb-6">
          Blockchain Explorer
        </h2>

        <ExplorerTable />
      </main>
    </>
  );
}
