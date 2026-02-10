"use client";

import { useState } from "react";
import { server, contract } from "./stellar";
import { connectWallet, signTx } from "./wallet";
import {
  TransactionBuilder,
  Transaction,
  Networks,
  nativeToScVal
} from "@stellar/stellar-sdk";

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

  return (
    <div>
      <button onClick={handleClick}>Increment Counter</button>
      <p>Status: {status}</p>
    </div>
  );
}
