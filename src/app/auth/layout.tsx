"use client";
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'

export default function AuthLayout({children} : { children: ReactNode}) {
    const currentPath = usePathname();
  return (
    <div className='flex justify-center items-center bg-blue-400 h-screen'>
        <div className='bg-white min-w-[600px] min-h-[400px] p-[50px] rounded-[10px]'>
            <h1 className='text-center font-bold text-[30px] text-[#666] mb-[30px]'>
                { currentPath == '/auth/register' &&  "Register" }
                { currentPath == '/auth/login' &&  "Login" }
            </h1>
            {children}
        </div>
    </div>
  )
}