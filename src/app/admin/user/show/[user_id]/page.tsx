"use client"
import { baseUrl } from '@/utils/baseURL';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { showError, showSucces } from "@/utils/notify"
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Props{
    params: {
        user_id: string
    }
}

interface User{
    id: number,
    name: string,
    email: string,
    profile_image: string,
    gender: string,
    role: string,
    created_at: Date,
    updated_at: Date,
    Artist: []
  }

export default function editUser({ params: { user_id} }: Props) {
    const router = useRouter();

    const [ user, setUser] = useState<User>();

    const fetcUserById = () =>{
        axios.get(`${baseUrl.local}/users/${user_id}`)
        .then(res =>{
            setUser(res.data.user)
        })
        .catch(err=>{
            showError(err);
        })
    }

    useEffect(()=>{
        fetcUserById();
    },[])

  return (
    <div >
        <h1 className='mb-[30px] pb-2 border-b-2 text-[30px] font-bold'>User Details</h1>
        <table className='table table-caption'>
            <thead>
                <tr>
                    <th>Name</th>
                    <td>{user?.name}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{user?.email}</td>
                </tr>
                <tr>
                    <th>Gender</th>
                    <td>{user?.gender}</td>
                </tr>
                <tr>
                    <th>Role</th>
                    <td>{user?.role}</td>
                </tr>
                <tr>
                    <th>Artists</th>
                    <td>
                        <ul>
                            {
                                user?.Artist.map((artist,i) =>{
                                    return (
                                        <li key={i}>
                                            {artist.name}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </td>
                </tr>
            </thead>
        </table>
        <Link href={`/admin/user/edit/${user?.id}`} className='btn btn-primary'>Edit User</Link>
    </div>
  )
}
