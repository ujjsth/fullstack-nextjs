"use client";
import React, { useRef } from 'react';
import { useHoverDirty } from 'react-use';
import { FaRegUser } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { useRouter } from 'next/navigation';

export default function AdminHeader() {
  const router = useRouter();
  const ref = useRef(null);
  const isHovering = useHoverDirty(ref);

  const handleLogout = () =>{
    router.push("/auth/login");
  }

  return (
    <div className=' h-[50px] flex justify-between items-center px-[30px]'>
      <div>
      <FaBarsStaggered />
      </div>

      <div ref={ref} className='relative flex gap-3 items-center h-[50px]'>
        <FaRegUser/>
        <span>Admin</span>

        {
          isHovering && 
            <div className='absolute right-0 top-[100%] w-[200px] bg-slate-300 p-[15px] rounded-lg items-center gap-3 flex z-[999]'>
              <button onClick={handleLogout} className='flex items-center gap-2'>
                <CiLogout />
                <span>Logout</span>
              </button>
            </div>
      }

      </div>
     
    </div>
  )
}
