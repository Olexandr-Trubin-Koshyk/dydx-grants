import { FC, ReactNode } from 'react'

import styles from './layout.module.scss'
import NotFound from '../../pages/404/NotFound'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

interface Props {
  children?: ReactNode,
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />

      <div className={styles.content}>
        {children || <NotFound />}
      </div>

      <Footer />
    </div>
  )
}

export default Layout
