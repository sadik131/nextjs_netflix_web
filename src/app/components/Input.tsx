import React from "react"

interface InputProp {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type: string
    placeholder: string
}

const Input: React.FC<InputProp> = ({ placeholder, onChange, type }) => {
    return (
        <input type={type} onChange={onChange} placeholder={placeholder} className='rounded-md p-1 focus:outline-none focus:ring-1 text-black w-full' />
    )
}

export default Input