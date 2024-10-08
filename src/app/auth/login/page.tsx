"use client";

import Link from "next/link"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { showError, showSucces } from "@/utils/notify";

export default function LoginPage() {
    const router = useRouter();
    const [isSubmitting, setSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [formDataError, setFormDataError] = useState({
        emailError: "",
        passwordError: "",
    });

    const handleChange= (e : any) =>{
        setFormData({...formData, [e.target.name] : e.target.value })
    }

    const handleSubmit = (e:any) =>{
        e.preventDefault();

        if(formData.email === ''){
            setFormDataError({ ...formDataError, emailError : "Email is required field" });
        } else{
            setFormDataError({ ...formDataError, emailError : "" });
        }

        if(formData.password === ''){
            setFormDataError({ ...formDataError, passwordError : "Password is required fiel" });
            
        } else{
            setFormDataError({ ...formDataError, passwordError : "" });
        }

        if(formData.email !== '' && formData.password !== ''){
            setSubmitting(true);

            setTimeout(()=>{
                setSubmitting(false);
                
                router.push('/admin/dashboard');
                showSucces('Login Successful!');

            }, 2000);

        }
    }

  return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                type="text"
                placeholder='Enter your email'
                name="email"
                className='w-full border border-[#9c9b9b] h-[60px] p-[15px] rounded-[5px] text-[18px] mt-[30px]'
            />

            { formDataError.emailError !== '' && <span className="alert alert-error">{formDataError.emailError}</span>}

            <input
                onChange={handleChange}
                type="text"
                name="password"
                placeholder='Enter password'
                className='w-full border border-[#9c9b9b] h-[60px] p-[15px] rounded-[5px] text-[18px] mt-[30px]'    
                />
                { formDataError.passwordError !== '' && <span className="alert alert-error">{formDataError.passwordError}</span>}
            
            <p className="text-[#666] text-[18px] mt-[30px]">Don't have an account ? <Link href="/auth/register">Register</Link></p>            
        
            <button disabled={isSubmitting} type="submit" className="btn btn-primary w-full mt-[15px]">
                
                {
                    isSubmitting
                    ? <span className="flex items-center gap-2">
                        <span className="loading loading-bars loading-md"></span>
                        <span>Submitting</span>
                    </span>
                    : <span>Sign In</span>
                    }
            </button>
        </form>
  )
}
