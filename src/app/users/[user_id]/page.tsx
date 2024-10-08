import { notFound } from 'next/navigation';
import React from 'react';

interface Props {
  params : {
    user_id : number,
  }
}

export default function UserDetailPage({ params : { user_id}} : Props) {
  
  if(user_id > 10){
    return notFound();
  }

  return (
    <div>User Detail Page</div>
  )
}
