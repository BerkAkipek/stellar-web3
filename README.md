# Stellar Wallet App

## Soroban Smart Contract

This app deploys and interacts with a Soroban smart contract on Stellar testnet.

Contract capabilities:

- Persistent on-chain storage
- Wallet-based authorization
- Increment counter logic
- Emits events on every update
- Handles 3 explicit error types

The contract is compiled to WASM and deployed to Stellar testnet.

### Contract ID

- CDTGUWVP7SBJFZD2A2WYBMLP3YXFEDR5HJZ54P444HV67I2ODIORUGE3

![Wallet Connected](./public/screenshots/Before.png)
![Transaction](./public/screenshots/Signing.png)
![After Transaction](./public/screenshots/Result.png)

## Features

- Connect Freighter wallet
- Deploy and interact with Soroban smart contract
- Increment on-chain counter
- Persistent contract storage
- Real-time event listener (no page refresh)
- Transaction status tracking (pending/success/failure)
- Error handling and feedback
- Clean modular architecture

## Project Structure

frontend/
  app/
    page.tsx    
    stellar.ts 
    wallet.ts    

contracts/
  hello_world/
    src/lib.rs   
    hello_world.wasm


## Tech Stack

- Next.js (App Router)
- TypeScript
- React Hooks
- Stellar SDK
- Freighter Wallet API

## Installation

Clone the repository:

- git clone https://github.com/BerkAkipek/stellar-web3
- cd stellar-web3

## Install dependencies:

npm install

## Run development server:

npm run dev

## Open in browser:

http://localhost:3000

## Build & Deploy Contract

Install Soroban CLI:

cargo install soroban-cli

## Build:

cd contracts/hello_world
soroban contract build

## Deploy to testnet:

soroban contract deploy \
  --wasm target/wasm32-unknown-unknown/release/hello_world.wasm \
  --source alice \
  --network testnet


## Requirements

Node.js 18+
Freighter wallet browser extension installed
Freighter:
https://www.freighter.app
Network Configuration
The app uses Stellar testnet by default.
Horizon endpoint:
https://horizon-testnet.stellar.org
To fund your test wallet:
https://friendbot.stellar.org
Ensure Freighter is also set to Testnet.

## Level 2 Requirements Checklist

- [x] Contract deployed on testnet
- [x] Contract called from frontend
- [x] Multi-wallet support (Freighter)
- [x] Transaction status visible (pending/success/failed)
- [x] 3+ error types handled
- [x] Real-time contract events integrated
- [x] Multiple meaningful commits


## License

MIT