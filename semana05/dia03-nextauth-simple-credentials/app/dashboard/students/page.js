'use client'

import { fetchStudents } from '@/services/students'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

const StudentsPage = () => {
  const [students, setStudents] = useState([])
  
  const { data: session, status } = useSession()
  
  useEffect(() => {
    fetchStudents({ token: session?.user.token })
      // .then(setStudents)
      .then((data) => setStudents(data))
  }, [status])

  return (
    <div className='pt-20'>{JSON.stringify(students)} {status}</div>
  )
}

export default StudentsPage