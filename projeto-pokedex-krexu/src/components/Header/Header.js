import React from 'react'
import Logo from "../../image/Pokemon-Logo.png"
import HeaderStyle from './HeaderStyle'
import { useLocation } from 'react-router-dom'

const Header = () => {

const location = useLocation()

  return (
    <HeaderStyle>
      <img src={Logo} alt="Logo com nome Pokemon" />
    </HeaderStyle>
  )
}

export default Header