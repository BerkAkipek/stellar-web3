"use client";

import WalletButton from "./components/WalletButton";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <WalletButton />
    </main>
  );
}
