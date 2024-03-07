export const formatDate = (value) => {
  const valueToDate = new Date(value)

  const options = {
    dateStyle: 'full'
  }

  return new Intl.DateTimeFormat('en-US', options)
    .format(valueToDate)
}

export const formatNumber = (number) => {
  const localeDefault = 'en-US'

  const options = {
    minimumFractionDigits: 2
  }

  return new Intl.NumberFormat(localeDefault, options)
    .format(number)
}