"use client";

import { useState } from "react";
import { useStellarWallet } from "../hooks/useStellarWallet";

export default function WalletButton() {
  const {
    connect,
    disconnect,
    connected,
    publicKey,
    balance,
    sendXLM,
  } = useStellarWallet();

  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");

  const handleSend = async () => {
    setStatus("Sending...");

    const res = await sendXLM(to, amount);

    if (res.success) {
      setStatus("Success\nHash: " + res.hash);
    } else {
      setStatus("Failed: " + res.error);
    }
  };

  return (
    <div style={{ textAlign: "center", color: "#FFD700", width: 340 }}>
      <button
        onClick={connected ? disconnect : connect}
        style={{
          backgroundColor: "#FFD700",
          color: "#000",
          padding: 14,
          borderRadius: 8,
          width: "100%",
          fontWeight: 600,
        }}
      >
        {connected ? "Disconnect Wallet" : "Connect Wallet"}
      </button>

      {connected && (
        <>
          <p style={{ marginTop: 12 }}>
            Balance: {balance} XLM
          </p>

          <input
            placeholder="Destination address"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            style={inputStyle}
          />

          <input
            placeholder="Amount (XLM)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={handleSend}
            style={{
              ...inputStyle,
              backgroundColor: "#FFD700",
              color: "#000",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Send XLM
          </button>

          <pre style={{ marginTop: 12, whiteSpace: "pre-wrap" }}>
            {status}
          </pre>
        </>
      )}
    </div>
  );
}

const inputStyle = {
  width: "100%",
  marginTop: 8,
  padding: 10,
  background: "#111",
  border: "1px solid #FFD700",
  color: "#FFD700",
  borderRadius: 6,
};
