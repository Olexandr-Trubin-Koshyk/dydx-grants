import logo from '../../assets/dydx-logo.png'
import NavList from '../UI/navList/NavList'
import { navLink } from '../../types/types'

import styles from './header.module.scss'
import Button from '../UI/button/Button'

const Header = () => {
  const headerNavItems: navLink[] = [
    { title: 'Discover initiatives', href: '/', id: crypto.randomUUID() },
    { title: 'Funded grants', href: '/', id: crypto.randomUUID() },
    { title: 'Program expenses', href: '/', id: crypto.randomUUID() },
    { title: 'Blog', href: '/', id: crypto.randomUUID() },
    { title: 'FAQ', href: '/', id: crypto.randomUUID() },
  ];

  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="DYDX Logo" />
      <nav>
        <NavList items={headerNavItems} />
        <Button title='Apply for grant' />
      </nav>
    </header>
  )
}

export default Header
