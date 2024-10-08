"use client"
import React, { useEffect, useState } from 'react'
import { FaUsers } from 'react-icons/fa';
import DashboardPanelCard from '@/components/DashboardPanelCard';
import axios from 'axios';

export default function UserCard() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false)

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

  useEffect(() =>{
    fetchUsersData();
  },[])

  return (
    <>
      <DashboardPanelCard
      isLoading={isLoading}
      color="#27ae60"
      title="Users"
      counter={users.length}
      href="/admin/user" icon={ <FaUsers />} />
    </>
  )
}
