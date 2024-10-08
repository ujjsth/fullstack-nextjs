"use client";
import { useRouter } from 'next/navigation';

export default function AdminPage() {
    useRouter().push('/admin/dashboard');
}
