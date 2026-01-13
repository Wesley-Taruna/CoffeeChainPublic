"use client";

import Navbar from "@/components/Navbar";
import SupplyForm from "@/components/SupplyForm";
import SupplyTable from "@/components/SupplyTable";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <main className="p-8 bg-black min-h-screen text-white">
        <h2 className="text-2xl font-semibold mb-6">
          Supply Chain Dashboard
        </h2>

        <SupplyForm />
        <div className="mt-10">
          <SupplyTable />
        </div>
      </main>
    </>
  );
}
