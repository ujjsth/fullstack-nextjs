"use client"
import { baseUrl } from '@/utils/baseURL';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from "react-hook-form";

export default function CreateArtist() {
    const router = useRouter();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const SubmitRegisterForm = (data: any) => {
        axios.post(`${baseUrl.local}artists`, data )
        .then(res=>{
            console.log(res);
            router.push('/admin/artist/');
        })
        .catch(err=>console.log(err))
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit(SubmitRegisterForm)}>
            <div className='form-group'>
                <input type="text" placeholder="Enter Name" {...register("name", {required: true})} className='h-[50px] p-3 mb-3'/>
            </div>

            <div className='form-group'>
                <input type="date" placeholder="Rease Year" {...register("first_release_year", {required: true})} className='h-[50px] p-3 mb-3' />
            </div>

            <div className='form-group'>
                <input type="date" placeholder="Choose Date" {...register("dob", {required: true})} className='h-[50px] p-3 mb-3' />
            </div>

            <div className='form-group'>
                <select {...register("gender", { required: true })} className='h-[50px] p-3 mb-3'>
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                    <option value="OTHER">OTHER</option>
                </select>
            </div>

            <div className='form-group'>
                <input type="text" placeholder="Enter Address" {...register("address", {required: true})} className='h-[50px] p-3 mb-3'/>
            </div>

            <div className='form-group'>
                <input type="number" placeholder="Albums" {...register("total_albums", {required: true})} className='h-[50px] p-3 mb-3'/>
            </div>

            <input type="submit" className='btn btn-primary mt-3'/>
        </form>
    </div>
  )
}
