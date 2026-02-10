"use client";

import { useState } from "react";
import {
  TransactionBuilder,
  Transaction,
  Networks,
  nativeToScVal
} from "@stellar/stellar-sdk";

import { server, contract } from "./stellar";
import { connectWallet, signTx } from "./wallet";

export default function Home() {
  const [status, setStatus] = useState("idle");

  const handleClick = async () => {
    try {
      setStatus("pending");

      const address = await connectWallet();
      const account = await server.getAccount(address);

      const tx = new TransactionBuilder(account, {
        fee: "100",
        networkPassphrase: Networks.TESTNET
      })
        .addOperation(
          contract.call(
            "increment",
            nativeToScVal(address, { type: "address" })
          )
        )
        .setTimeout(30)
        .build();

      const { signedTxXdr } = await signTx(tx.toXDR());

      const signedTx = TransactionBuilder.fromXDR(
        signedTxXdr,
        Networks.TESTNET
      ) as Transaction;

      await server.sendTransaction(signedTx);

      setStatus("success");
    } catch (e) {
      console.error(e);
      setStatus("failed");
    }
  };

  const statusColor = {
    idle: "text-gray-400",
    pending: "text-yellow-400 animate-pulse",
    success: "text-green-400",
    failed: "text-red-400"
  }[status];

  return (
    <main className="min-h-screen bg-black text-yellow-400 flex items-center justify-center">
      <div className="bg-zinc-900 border border-yellow-500/40 rounded-2xl shadow-2xl p-10 w-[360px] text-center space-y-6">

        <h1 className="text-3xl font-bold tracking-widest">
          Stellar Counter
        </h1>

        <button
          onClick={handleClick}
          className="
            w-full
            bg-yellow-400
            text-black
            font-bold
            py-3
            rounded-xl
            hover:bg-yellow-300
            active:scale-95
            transition
            shadow-lg
          "
        >
          Increment
        </button>

        <p className={`text-sm font-mono ${statusColor}`}>
          Status → {status}
        </p>

      </div>
    </main>
  );
}
