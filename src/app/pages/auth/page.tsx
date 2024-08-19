"use client"

import Input from '@/app/components/Input'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function Auth() {
  const {data} = useSession()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [variant, setVariant] = useState("login")
  const [error, setError] = useState("")
  const router = useRouter()

  if(data?.user){
    router.push("/")
  }

  const toggleVariant = () => {
    setVariant(variant === "login" ? "register" : "login")
  }
  

  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
    e.preventDefault()
    // login
    if (variant === "login") {
      try {

        if (!email && !password) {
          return alert("put all info")
        }

        const res = await signIn("credentials", {
          email,
          password,
          redirect: true,
          callbackUrl: '/',
        })
        if (res?.error) {
          setError(res.error)
        }
        setLoading(false)
      } catch (error) {
        console.log(error, "next exx")
      }
    }
    else {
      try {
        fetch("/api/register", {
          method: 'POST',
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ name, email, password })
        })
          .then(res => res.json())
          .then(data => {
            if (data.status === 200) {
              setVariant("login")
              setLoading(false)
            }
          })
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    }
  }

  return (
    <div className='w-full h-screen bg-[url("/bg.jpg")] relative'>
      <div className='absolute h-screen w-full bg-stone-900 opacity-50'>
      </div>
      <div className='py-5 px-10 relative z-10'>
        <Image src={"/logo.png"} height={100} width={150} alt='logo' />
      </div>
      <div className='relative bg-zinc-800-700 w-full md:w-1/3 lg:w-1/4 rounded-md p-5 mx-auto' style={{ backgroundColor: 'rgba(106, 91, 105, 0.5)' }}>
        <h1 className='text-2xl font-bold mb-4'>{variant === "login" ? "Login" : "Register"}</h1>
        <form onSubmit={(e) => handelSubmit(e)} className='flex flex-col gap-y-4'>
          {variant === "register" && <Input onChange={(e) => setName(e.target.value)} placeholder='Enter Name' type='text' />
          }
          <Input onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' type='text' />
          <Input onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' type='password' />
          <button disabled={loading} type='submit' className='bg-red-700 disabled:bg-red-300 disabled:cursor-not-allowed py-2 rounded-lg'>{variant === "login" ? "Login" : "Register"}</button>
          {error && <p className='text-sm text-red-800'>{error}</p>}
        </form>
        {variant === "login" ?
          <p className='text-sm mt-6 '>Already using Netflex? <span onClick={() => toggleVariant()} className='underline cursor-pointer'>Login now</span></p>
          :
          <p className='text-sm mt-6 '>First time using Netflex? <span onClick={() => toggleVariant()} className='underline cursor-pointer'>Create an account</span></p>}
      </div>
    </div>
  )
}

export default Auth