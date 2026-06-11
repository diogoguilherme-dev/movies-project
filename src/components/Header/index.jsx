import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Logo from '../../assets/logo-movies-project.png'
import { Container, Li, Menu } from './styles'

function Header() {
  const [changeBackground, setChangeBackground] = useState(false)
  const { pathname } = useLocation()

  window.onscroll = () => {
    if (window.pageYOffset > 150 ){
      setChangeBackground(true)
    } else {
      setChangeBackground(false)
    }
  }

  return (
    <Container $changeBackground={changeBackground}>
      <img src={Logo} alt="logo-movies-project" />
      <Menu>
        <Li $isActive={pathname === '/'}>
          <Link to="/">Home</Link>
        </Li>
        <Li $isActive={pathname.includes('filmes')}>
          <Link to="/filmes">FIlmes</Link>
        </Li>
        <Li $isActive={pathname.includes('series')}>
          <Link to="/series">Séries</Link>
        </Li>
      </Menu>
    </Container>
  )
}

export default Header
