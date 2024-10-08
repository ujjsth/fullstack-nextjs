import GoToBack from '@/components/GoToBack'
import React from 'react'

export default function UnauthorizedPage() {
  return (
    <div className="bg-blue-800 h-screen flex justify-center items-center flex-col">
    <h1 className="text-white text-[80px] font-bold">You are not unauthorized!</h1>
    <GoToBack/>
</div>
  )
}
