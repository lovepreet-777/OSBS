import React from 'react'

const getYr = () => {
  const options = {
    year: 'numeric',
  }
  return new Date().toLocaleString('en-US', options)
}
const Footer = () => {
  return (
    <footer>
      
      <p className='copyright'>OSBS Copyright &copy; {getYr()}</p>
     
    </footer>
  )
}

export default Footer
