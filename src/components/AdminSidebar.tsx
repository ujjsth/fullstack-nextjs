"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaRegUser, FaMusic,FaGuitar } from "react-icons/fa";

export default function AdminSidebar() {
  const currentPath = usePathname();

  const navLinks = [
    { href: "/admin/artist", label: "Artist", icon: <FaGuitar />},
    { href: "/admin/music", label: "Music", icon: <FaMusic />},
    { href: "/admin/user", label: "User", icon: <FaRegUser />}
  ]

  return (
    <div className='px-[30px] pt-[200px]'>
      <ul>
        {
          navLinks.map(link=> <li key={link.href}>
            <Link
            href={link.href}
            className={`text-white flex items-center gap-3 py-[10px] px-[50px] border border-[#fff] rounded-[10px] hover:bg-blue-400 ${currentPath === link.href ? 'bg-blue-400': ''}`}>
              {link.icon}
              <span>{link.label}</span>
            </Link>
          </li>)
        }       

      </ul>
    </div>
  )
}
