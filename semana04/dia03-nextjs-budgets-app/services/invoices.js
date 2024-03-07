const API_URL = 'https://mockmentor.4.us-1.fl0.io/api/v1'

export const fetchInvoices = async () => {
  const url = `${API_URL}/invoices`

  const token = localStorage.getItem('auth-token')

  const options = {
    method: 'GET', // Este es el método que usa el api fetch por defecto, podríamos quitarlo
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await fetch(url, options)

  return await response.json()
}