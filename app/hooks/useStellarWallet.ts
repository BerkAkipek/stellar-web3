"use client";

import { useEffect, useState, useCallback } from "react";
import {
  isConnected,
  isAllowed,
  setAllowed,
  getAddress,
} from "@stellar/freighter-api";
import * as StellarSdk from "stellar-sdk";
import { signTransaction } from "@stellar/freighter-api";

const server = new StellarSdk.Horizon.Server(
  "https://horizon-testnet.stellar.org"
);

export function useStellarWallet() {
  const [available, setAvailable] = useState(false);
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchBalance = useCallback(async (address: string) => {
    try {
      const account = await server.loadAccount(address);

      const xlm = account.balances.find(
        (b: any) => b.asset_type === "native"
      );

      setBalance(xlm?.balance ?? "0");
    } catch (err) {
      console.error("Balance fetch failed:", err);
    }
  }, []);

  const sendXLM = useCallback(
  async (destination: string, amount: string) => {
      if (!publicKey) throw new Error("Wallet not connected");

      try {
      const account = await server.loadAccount(publicKey);

      const tx = new StellarSdk.TransactionBuilder(account, {
          fee: StellarSdk.BASE_FEE,
          networkPassphrase: StellarSdk.Networks.TESTNET,
      })
          .addOperation(
          StellarSdk.Operation.payment({
              destination,
              asset: StellarSdk.Asset.native(),
              amount,
          })
          )
          .setTimeout(30)
          .build();

      const { signedTxXdr } = await signTransaction(tx.toXDR(), {
          networkPassphrase: StellarSdk.Networks.TESTNET,
      });

      const signedTx = StellarSdk.TransactionBuilder.fromXDR(
          signedTxXdr,
          StellarSdk.Networks.TESTNET
      );

      const result = await server.submitTransaction(signedTx);

      return {
          success: true,
          hash: result.hash,
      };
      } catch (err: any) {
      console.error(err);

      return {
          success: false,
          error: err.message,
      };
      }
  },
  [publicKey]
  );

  useEffect(() => {
    async function init() {
      try {
        const { isConnected: walletExists } = await isConnected();
        setAvailable(walletExists);

        if (!walletExists) return;

        const { isAllowed: allowed } = await isAllowed();

        if (allowed) {
          const { address } = await getAddress();
          setPublicKey(address);
          fetchBalance(address);
        }
      } finally {
        setLoading(false);
      }
    }

    init();
  }, [fetchBalance]);

  const connect = useCallback(async () => {
    if (!available) return;

    await setAllowed();
    const { address } = await getAddress();

    setPublicKey(address);
    fetchBalance(address);
  }, [available, fetchBalance]);

  const disconnect = useCallback(() => {
    setPublicKey(null);
    setBalance(null);
  }, []);

  return {
    available,
    publicKey,
    balance,
    loading,
    connected: !!publicKey,
    sendXLM,
    connect,
    disconnect,
  };
}
