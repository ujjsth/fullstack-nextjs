"use client"
import { baseUrl } from '@/utils/baseURL';
import axios from 'axios';
import React, { useState } from 'react';
import { showError, showSucces } from "@/utils/notify"
import { handleError } from '@/utils/errorsHandle';
import { useRouter } from 'next/navigation';

export default function CreateNewUser() {
    const router = useRouter();
    const [ formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: ""
    });

    const handleChange = (e:any) =>{
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    const createNewUser = (e:any) =>{
        e.preventDefault();

        axios.post(`${baseUrl.local}users`, formData )
        .then(res =>{
            showSucces("User created susccessfull!");

            router.push('/admin/user');

        })
        .catch(err=>{
            showError(handleError(err))
        });

        // clear form
        setFormData({
            name: "",
            email: "",
            password: "",
            role: ""
        })
    }

  return (
    <div >
        <h1 className='mb-[30px] pb-2 border-b-2 text-[30px] font-bold'>Create New User</h1>
        <form onSubmit={createNewUser}>
            <div className='grid grid-cols-2 gap-[30px]'>
                <div className='col-span-1'>
                    <label htmlFor="nameField">Name</label>
                    <input type="text" name='name' onChange={handleChange} value={formData.name} id='nameField' className='w-full py-3 px-5 border border-[#666]' placeholder='Enter Name' />
                </div>
                <div className='col-span-1'>
                    <label htmlFor="emailField">Email</label>
                    <input type="text" name='email' onChange={handleChange} value={formData.email} id='emailField' className='w-full py-3 px-5 border border-[#666]' placeholder='Enter Email'/>
                </div>
                <div className='col-span-1'>
                    <label htmlFor="passwordField">Password</label>
                    <input type="text" name='password' onChange={handleChange} value={formData.password} id='passwordField' className='w-full py-3 px-5 border border-[#666]' placeholder='Enter Name' />
                </div>
                <div className='col-span-1'>
                    <label htmlFor="roleField">Role</label>
                    <select name="role" id="roleField" onChange={handleChange} value={formData.role} className='w-full py-3 px-5 border border-[#666]'>
                        <option value="">Select Role</option>
                        <option value="ADMIN">ADMIN</option>
                        <option value="ARTIST_MANAGER">ARTIST_MANAGER</option>
                        <option value="USER">USER</option>
                    </select>
                </div>
                <div className='col-span-2'>
                    <button type='submit' className='btn btn-success text-white'>Create User</button>
                </div>
            </div>
        </form>
    </div>
  )
}
