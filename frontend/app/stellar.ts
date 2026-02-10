import {
  rpc,
  Contract,
  Networks,
  TransactionBuilder,
  nativeToScVal
} from "@stellar/stellar-sdk";

export const CONTRACT_ID = "CDTGUWVP7SBJFZD2A2WYBMLP3YXFEDR5HJZ54P444HV67I2ODIORUGE3";

export const server = new rpc.Server(
  "https://soroban-testnet.stellar.org"
);

export const contract = new Contract(CONTRACT_ID);
