import axios from 'axios'

const API_URL = 'https://mockmentor.4.us-1.fl0.io/api/v1'

export async function createExpense(form) {
  const url = API_URL + '/expenses'

  const token = localStorage.getItem('auth-token')

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }

  const response = await axios.post(url, form, headers)

  console.log(response)

  return response.data
}