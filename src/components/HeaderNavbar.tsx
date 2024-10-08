"use client";
import { useSession, signOut, signIn } from 'next-auth/react';
import Link from 'next/link'
import React from 'react'

export default function HeaderNavbar() {
    const { status, data: session } = useSession();

  return (
    <div className='bg-black h-[50px] flex items-center justify-center'>
        <nav>
            <ul className='flex gap-5'>
                <li>
                    <Link href="/" className='text-white'>Home</Link>
                </li> 
                <li>
                    <Link href="/users" className='text-white'>Users</Link>
                </li>                
                { status === 'loading' && <p className='text-white'>Loading...</p> }
                {
                    status === 'authenticated' &&  <>
                            <li>
                        <span className='text-white'>{session.user?.name}</span>
                    </li>
                    <li>
                        <button onClick={() => signOut({ callbackUrl: '/'})} className='text-white'>
                            Sign Out
                        </button>
                    </li>
                    </>
                    
                }
                {
                    status === 'unauthenticated' && <li>
                    {/* <Link href="/api/auth/signin" className='text-white'>Sign In</Link> */}
                    <button onClick={() => signIn()} className='text-white'>
                            Sign In
                        </button>
                </li>
                }
            </ul>
        </nav>
    </div>
  )
}
