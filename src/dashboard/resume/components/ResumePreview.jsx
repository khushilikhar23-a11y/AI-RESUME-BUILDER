import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useState } from 'react'
import PersonalDetailPreview from './preview/PersonalDetailPreview'

function ResumePreview() {
  const {resumeInfo,setResumeInfo}=useState(ResumeInfoContext)
  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'>
      {/* Personal Detail */}
          <PersonalDetailPreview resumeInfo={resumeInfo}/>

      {/* Summary */}

      {/* Professional Experience */}

      {/* Educational */}

      {/* Skillss */}
    </div>
  )
}

export default ResumePreview
