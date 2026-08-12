import React, { useEffect } from 'react'

function EditResume() {
    const params=useParams();

    useEffect(()=>{
        console.log(params.resumeId);
    },[])

  return (
    <div>
      EditResume
    </div>
  )
}

export default EditResume
