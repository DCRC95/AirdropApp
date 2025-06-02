"use client"
import { ChangeEvent } from "react"
 
interface InputFieldProps {
    label: string
    placeholder: string
    value: string
    type?: string
    larger?: boolean
    onChange: (value: string) => void
}

export default function InputField({ 
    label, 
    placeholder, 
    value, 
    type = "text", 
    larger = false, 
    onChange 
}: InputFieldProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChange(e.target.value)
    }

    const inputClasses = `
        w-full px-4 py-2 rounded-lg border border-gray-300 
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
        transition-all duration-200 ease-in-out
        ${larger ? 'min-h-[120px] resize-y' : 'h-10'}
    `

    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
                {label}
            </label>
            {larger ? (
                <textarea
                    className={inputClasses}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                />
            ) : (
                <input
                    type={type}
                    className={inputClasses}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                />
            )}
        </div>
    )
} 