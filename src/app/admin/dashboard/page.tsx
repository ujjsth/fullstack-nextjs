import React from 'react';
import UserCard from './partials/UserCard';
import MusicCard from './partials/MusicCard';
import ArtistCard from './partials/ArtistCard';

export default function DashboardPage() {
  
  return (
    <div className='grid grid-cols-12 gap-[30px]'>

      <div className='col-span-4'>
        <UserCard />
      </div>

      <div className='col-span-4'>
        <MusicCard/>
      </div>

      <div className='col-span-4'>
        <ArtistCard/>
      </div>


    </div>
  )
}
