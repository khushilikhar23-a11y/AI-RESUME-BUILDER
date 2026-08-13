import React, { useEffect } from 'react'
import { useState } from 'react'
import AddResume from './components/AddResume'
import GlobalApi from './../../service/GlobalApi';
import {useUser} from '@clerk/clerk-react';
import ResumeCardItem from './components/ResumeCardItem';

function Dashboard() {

  const {user}=useUser();
  const [resumesList,setResumesList]=useState([]);
  useEffect(()=>{
    user&&GetResumesList();
  },[user])

  // **
  // user to get user resume
  //
  
  const GetResumesList=()=>{
    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress)
    .then(resp=>{
        console.log(resp.data);
        setResumesList(resp.data.data);
    });
  };

  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My Resume</h2>
      <p>Start Creating AI resume to your next job role</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10'>
        <AddResume />
        {resumesList&&resumesList.map((resume,index)=>(
          <ResumeCardItem resume={resume} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Dashboard
