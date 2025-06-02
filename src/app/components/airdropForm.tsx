"use client"

import { useState } from "react"
import InputField from "./ui/inputField"
import { useChainId, useConfig, useAccount } from 'wagmi' 
import { chainsToTSender, tsenderAbi, erc20Abi } from "@/app/constants"
import {readContract} from "@wagmi/core"

export default function AirdropForm() {
const [tokenAddress, setTokenAddress] = useState("")
const [recipient, setRecipient] = useState("")
const [amount, setAmount] = useState("")
const chainId = useChainId()
const config = useConfig()
const account = useAccount()

 async function getApprovedAmount(tSenderAddress: string | null): Promise<string> {
if (!tSenderAddress) {
    throw new Error("Please Use an Approved Chain")
}

const response = await readContract(config, { 
    abi: erc20Abi,
    address: tokenAddress as `0x${string}`,
    functionName: "allowance",
    args: [account.address, tSenderAddress as `0x${string}`],
})
}

async function handleSubmit() {
    console.log("Airdropping...")
    console.log(tokenAddress)
    console.log( recipient)
    console.log( amount)
    const tSenderAddress = chainsToTSender[chainId]["tsender"]
    const approvedAmount = await getApprovedAmount(tSenderAddress)
    console.log(tSenderAddress,chainId)
    
}
     
    return (
        <div className="space-y-4">
            <InputField
                label="Wallet Address"
                placeholder="0x"
                value={tokenAddress}
                onChange={setTokenAddress}
            />  
            <InputField
                label="Recipient"
                placeholder="0x"
                value={recipient}
                onChange={setRecipient}
                larger={true}
            />  
            <InputField
                label="Amount"
                placeholder="100,200,300"
                value={amount}
                onChange={setAmount}
                larger={true}
            />  
            <button 
                onClick={handleSubmit}
                className="w-full px-4 py-2 text-sm font-medium text-black bg-white border border-transparent rounded-lg hover:border-black transition-all duration-200"
            >
                Send Tokens
            </button>
        </div>
    )

}