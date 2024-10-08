import AdminHeader from '@/components/AdminHeader'
import AdminSidebar from '@/components/AdminSidebar'
import React, { ReactNode } from 'react'

export default function AdminLayout({ children}: { children: ReactNode}) {
  return (
    <div className='relative w-screen h-screen'>
        <div className='w-[270px] bg-theme-sidebar absolute h-full'>
            <AdminSidebar/>
        </div>
        <div className='absolute w-[calc(100%-270px)] left-[270px] bg-slate-200 h-[50px]'>
            <AdminHeader/>
        </div>
        <main className='p-[50px] absolute top-[50px] w-[calc(100%-270px)] left-[270px] bg-slate-100 h-[calc(100%-50px)]'>
            { children}
        </main>
    </div>
  )
}
