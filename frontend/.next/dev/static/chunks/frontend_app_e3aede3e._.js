(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/app/stellar.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONTRACT_ID",
    ()=>CONTRACT_ID,
    "contract",
    ()=>contract,
    "server",
    ()=>server
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$dist$2f$stellar$2d$sdk$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/dist/stellar-sdk.min.js [app-client] (ecmascript)");
;
const CONTRACT_ID = "CDTGUWVP7SBJFZD2A2WYBMLP3YXFEDR5HJZ54P444HV67I2ODIORUGE3";
const server = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$dist$2f$stellar$2d$sdk$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rpc"].Server("https://soroban-testnet.stellar.org");
const contract = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$dist$2f$stellar$2d$sdk$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Contract"](CONTRACT_ID);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/app/wallet.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connectWallet",
    ()=>connectWallet,
    "signTx",
    ()=>signTx
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$freighter$2d$api$2f$build$2f$index$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/freighter-api/build/index.min.js [app-client] (ecmascript)");
;
async function connectWallet() {
    if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$freighter$2d$api$2f$build$2f$index$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isConnected"])()) {
        throw new Error("Freighter not installed or locked");
    }
    const { address } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$freighter$2d$api$2f$build$2f$index$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])();
    return address;
}
async function signTx(xdr) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$freighter$2d$api$2f$build$2f$index$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signTransaction"])(xdr, {
        networkPassphrase: "Test SDF Network ; September 2015"
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$stellar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/app/stellar.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/app/wallet.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$dist$2f$stellar$2d$sdk$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/dist/stellar-sdk.min.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Home() {
    _s();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const handleClick = async ()=>{
        try {
            setStatus("pending");
            const address = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectWallet"])();
            const account = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$stellar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["server"].getAccount(address);
            const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$dist$2f$stellar$2d$sdk$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionBuilder"](account, {
                fee: "100",
                networkPassphrase: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$dist$2f$stellar$2d$sdk$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Networks"].TESTNET
            }).addOperation(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$stellar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contract"].call("increment", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$dist$2f$stellar$2d$sdk$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nativeToScVal"])(address, {
                type: "address"
            }))).setTimeout(30).build();
            const { signedTxXdr } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signTx"])(tx.toXDR());
            const signedTx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$dist$2f$stellar$2d$sdk$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionBuilder"].fromXDR(signedTxXdr, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$dist$2f$stellar$2d$sdk$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Networks"].TESTNET);
            await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$stellar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["server"].sendTransaction(signedTx);
            setStatus("success");
        } catch (e) {
            console.error(e);
            setStatus("failed");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleClick,
                children: "Increment Counter"
            }, void 0, false, {
                fileName: "[project]/frontend/app/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "Status: ",
                    status
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/app/page.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(Home, "PrSSnJYnmPMLjC7rLJ6w5budhnU=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_app_e3aede3e._.js.map