"use client"
import GoToBack from '@/components/GoToBack'
import axios from 'axios';
import React, { useState } from 'react'
import { useEffectOnce } from 'react-use';
import { showError, showSucces } from "@/utils/notify"
import Link from 'next/link';
interface User{
  id: number,
  name: string,
  email: string,
  profile_image: string,
  gender: string,
  role: string,
  created_at: Date,
  updated_at: Date,
}
export default function page() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(false);

  const fetchUsersData = () =>{
    setLoading(true);

   axios.get('http://localhost:3000/api/users')
   .then(res =>{
    setUsers(res.data.users);
    setLoading(false);
  })
  .catch(err=>{
    setLoading(false);
   })
  }

  useEffectOnce(() =>{
    fetchUsersData();
  })

  const handleDelete = (id:number) => {
    axios.delete(`http://localhost:3000/api/users/${id}`)
    .then(res =>{

      showSucces("User Deleted Successfull!");

      // setUsers(users.filter(item => item.id != id))
      fetchUsersData();

    })
    .catch((err:any) =>{
      console.log(err);
      showError(err);
    })
  }

  return (
    <div>
        <GoToBack/>
        <div className='flex justify-between items-center'>
        <h1>Users List</h1>
        <Link href="/admin/user/create" className='btn btn-success'>Create User</Link>
        </div>
        <table className='table table-zebra'>
          <thead>
            <tr className='text-[20px] bg-black text-white'>
              <th>SN</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            isLoading
            ? <tr> 
                <td colSpan={10} className='bg-black'>Loading</td>
              </tr>
            :            users.length > 0 && users.map(user =>{
              return(
                <tr key={user.id}>
                <td>SN</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.role}</td>
                  <td>
                    <Link href={`/admin/user/edit/${user.id}`} className='btn btn-secondary'>
                      {/* show Icon */}
                      Edit
                    </Link>
                    <Link href={`/admin/user/show/${user.id}`} className='btn btn-primary mx-2'>
                      {/* show Icon */}
                      Show
                    </Link>
                    <button type='button' onClick={()=> handleDelete(user.id)} className='btn btn-error'>Delete</button>
                  
                  </td>
                </tr>
                
              )
            })
          }
            
          </tbody>
        </table>
    </div>
  )
}
