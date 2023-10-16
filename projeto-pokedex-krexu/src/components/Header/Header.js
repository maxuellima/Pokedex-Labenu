import React from 'react'
import Logo from "../../image/Pokemon-Logo.png"
import HeaderStyle from './HeaderStyle'

const Header = () => {
  return (
    <HeaderStyle>
      <img src={Logo} alt="Logo com nome Pokemon" />
    </HeaderStyle>
  )
}

export default Header