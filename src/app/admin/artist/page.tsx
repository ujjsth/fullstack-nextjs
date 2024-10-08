import GoToBack from '@/components/GoToBack'
import { useRouter } from 'next/router'
import React from 'react'

export default function ArtistPage() {
const router =  useRouter();
  const user = {
    role: "admin"
  }

  if(user.role !== 'admin') return router.push('/');

  return (
    <div>
        <GoToBack/>
        <h1>Users List</h1>
        <table></table>
    </div>
  )
}
