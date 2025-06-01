"use client"

import { getDefaultConfig } from "@rainbow-me/rainbowkit"
import {anvil, zkSync} from "wagmi/chains" 

const config = getDefaultConfig({
  appName: 'AirdropApp',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  chains: [anvil, zkSync],
  ssr: false, // If your dApp uses server side rendering (SSR)
});

export default config;