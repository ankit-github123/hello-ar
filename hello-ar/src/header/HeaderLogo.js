import React from 'react'
import Logo from "../images/header/logo.PNG"
export default function HeaderLogo() {
  return (
    <div><img className='header_logo' src={Logo} alt="logo" /><span className='right_border'></span> </div>
  )
}
