'use client'
export const fetchStudents = async ({ token }) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  const options = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await fetch(`${API_URL}/api/v1/students`, options)

  return await response.json()
}