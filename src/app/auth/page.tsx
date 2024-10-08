"use client";
import { useRouter } from 'next/navigation'

export default function AuthPage() {
    const router =  useRouter();

    return router.push('auth/login');
}
