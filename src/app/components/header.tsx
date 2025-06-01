"use client"

import { ConnectButton } from "@rainbow-me/rainbowkit"
import { FaGithub } from "react-icons/fa"
import Image from "next/image"

export default function Header() {
    return (
        <header className="w-full px-4 py-3 flex items-center justify-between border-b border-gray-200">
            <div className="flex items-center gap-4">
                <h1 className="text-xl font-bold">AirdropApp</h1>
                <a 
                    href="https://github.com/DCRC95/AirdropApp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                    <FaGithub size={24} />
                </a>
            </div>
            <ConnectButton />
        </header>
    )
} 