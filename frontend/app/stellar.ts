import {
  rpc,
  Contract,
  Networks,
  TransactionBuilder,
  nativeToScVal
} from "@stellar/stellar-sdk";

export const CONTRACT_ID = "CDTGUWVP7SBJFZD2A2WYBMLP3YXFEDR5HJZ54P444HV67I2ODIORUGE3";

export async function listenToEvents(
  onIncrement: (value: number) => void
) {
  let lastLedger = (await server.getLatestLedger()).sequence;

  setInterval(async () => {
    const res = await server.getEvents({
      startLedger: lastLedger,
      filters: [
        {
          type: "contract",
          contractIds: [CONTRACT_ID]
        }
      ]
    });

    res.events.forEach((e: any) => {
      if (e.eventType === "contract") {
        const value = Number(e.value?._value ?? 0);
        onIncrement(value);
      }
    });

    lastLedger = res.latestLedger + 1;
  }, 2000);
}

export const server = new rpc.Server(
  "https://soroban-testnet.stellar.org"
);

export const contract = new Contract(CONTRACT_ID);
