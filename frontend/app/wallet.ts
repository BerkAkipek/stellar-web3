import {
  getAddress,
  signTransaction,
  isConnected
} from "@stellar/freighter-api";

export async function connectWallet() {
  if (!(await isConnected())) {
    throw new Error("Freighter not installed or locked");
  }

  const { address } = await getAddress();
  return address;
}

export async function signTx(xdr: string) {
  return signTransaction(xdr, { networkPassphrase: "Test SDF Network ; September 2015" });
}
