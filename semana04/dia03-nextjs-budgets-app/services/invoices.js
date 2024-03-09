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

export const getInvoice = async (id) => {
  const url = `${API_URL}/invoices/${id}`

  const token = localStorage.getItem('auth-token')

  const options = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await fetch(url, options)

  return await response.json()
}

export const deleteInvoice = async (id) => {
  const url = `${API_URL}/invoices/${id}`

  const token = localStorage.getItem('auth-token')

  const options = {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await fetch(url, options)

  return await response.json()
}

export const updateInvoice = async (id, invoiceFields) => {
  const url = `${API_URL}/invoices/${id}`

  const token = localStorage.getItem('auth-token')

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(invoiceFields)
  }

  const response = await fetch(url, options)

  return await response.json()
}