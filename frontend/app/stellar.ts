import {
  rpc,
  Contract,
  Networks,
  TransactionBuilder,
  nativeToScVal
} from "@stellar/stellar-sdk";

export const CONTRACT_ID = "PASTE_YOUR_CONTRACT_ID";

export const server = new rpc.Server(
  "https://soroban-testnet.stellar.org"
);

export const contract = new Contract(CONTRACT_ID);
