import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-6 px-8 py-4 border-b border-zinc-800 bg-black text-white">
      <Link href="/app">Dashboard</Link>
      <Link href="/app/explorer">Explorer</Link>
      <Link href="/app/search">Search</Link>
    </nav>
  );
}
