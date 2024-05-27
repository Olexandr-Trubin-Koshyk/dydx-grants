import { FC } from 'react'
import { Link } from 'react-router-dom'

import { navLink } from '../../../types/types'
import { getIconByName } from '../../../utils/scripts'

import styles from './navlist.module.scss'

interface Props {
  items: navLink[]
}

const NavList: FC<Props> = ({ items }) => {

  return (
    <ul className={styles.navList}>
      {items.map((item: navLink) => <li className={styles.navItem} key={item.id}>
        <Link to={item.href}>
          <div>
            {item.title && <p>{item.title}</p>}
            {item.icon && <img src={getIconByName(item.icon)} />}
          </div>
        </Link>
      </li>)}
    </ul>
  )
}

export default NavList
