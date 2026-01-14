import { ethers } from "ethers";

export function getProvider() {
  if (typeof window === "undefined") {
    throw new Error("Window not available");
  }

  if (!window.ethereum) {
    throw new Error("MetaMask not installed");
  }

  return new ethers.BrowserProvider(window.ethereum);
}

export async function getSigner() {
  const provider = getProvider();
  return await provider.getSigner();
}
