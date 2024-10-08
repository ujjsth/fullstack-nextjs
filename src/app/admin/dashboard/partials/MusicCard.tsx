"use client"
import React, { useEffect, useState } from 'react'
import { FaMusic } from 'react-icons/fa';
import DashboardPanelCard from '@/components/DashboardPanelCard';
import axios from 'axios';

export default function MusicCard() {
  const [datas, setDatas] = useState([]);
  const [isLoading, setLoading] = useState(false)

  const fetchData = () =>{
    setLoading(true);

   axios.get('http://localhost:3000/api/musics')
   .then(res =>{
    setDatas(res.data.datas);
    setLoading(false);
  })
  .catch(err=>{
    setLoading(false);
   })
  }

  useEffect(() =>{
    fetchData();
  },[])

  return (
    <>
      <DashboardPanelCard
      isLoading={isLoading}
      color="#27ae60"
      title="Musics"
      counter={datas.length}
      href="/admin/music" icon={ < FaMusic/>} />
    </>
  )
}
