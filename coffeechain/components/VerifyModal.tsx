"use client";

type VerifyModalProps = {
  open: boolean;
  onClose: () => void;
  txHash: string;
};

export default function VerifyModal({
  open,
  onClose,
  txHash,
}: VerifyModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-3">
          Verify On-Chain Record
        </h2>

        <p className="text-sm text-zinc-400 mb-4">
          This transaction is permanently recorded on the blockchain.
        </p>

        <a
          href={`https://sepolia.etherscan.io/tx/${txHash}`}
          target="_blank"
          className="block text-orange-400 underline mb-6 text-sm break-all"
        >
          {txHash}
        </a>

        <button
          onClick={onClose}
          className="w-full py-2 bg-orange-500 text-black font-semibold rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}
