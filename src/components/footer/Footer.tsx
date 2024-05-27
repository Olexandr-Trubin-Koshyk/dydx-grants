import { navLink } from '../../types/types';
import NavList from '../UI/navList/NavList';

import avatar from '../../assets/dydx-avatar.png'
import styles from './footer.module.scss'

const Footer = () => {
  const footerNavItems: navLink[] = [
    { title: 'About', href: '/', id: crypto.randomUUID() },
    { title: 'FAQ', href: '/', id: crypto.randomUUID() },
    { title: 'Brand assets', href: '/', id: crypto.randomUUID() },
    { title: 'dYdX Foundation', href: '/', id: crypto.randomUUID(), icon: 'refference' },
    { title: 'dYdX trading', href: '/', id: crypto.randomUUID(), icon: 'refference' },
  ];

  const footerSocialsNavItems: navLink[] = [
    { href: 'https://google.com', id: crypto.randomUUID(), icon: 'twitter' },
    { href: '/', id: crypto.randomUUID(), icon: 'discord' },
  ]

  return (
    <footer className={styles.footer}>
      <nav>
        <img src={avatar} alt="DYDX Avatar" />
        <NavList items={footerNavItems} />
      </nav>
      <nav>
        <NavList items={footerSocialsNavItems} />
      </nav>
    </footer>
  )
}

export default Footer
