"use client";

export default function ExplorerTable() {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-400">
                <thead className="text-xs uppercase bg-zinc-900 text-gray-400">
                    <tr>
                        <th className="px-6 py-3">Tx Hash</th>
                        <th className="px-6 py-3">Block</th>
                        <th className="px-6 py-3">From</th>
                        <th className="px-6 py-3">To</th>
                        <th className="px-6 py-3">Method</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-black border-b border-zinc-800">
                        <td className="px-6 py-4" colSpan={5}>
                            No transactions found.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
