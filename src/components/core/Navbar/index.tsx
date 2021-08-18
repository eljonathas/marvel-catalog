import Image from 'next/image'
import Link from 'next/link'

import { Typography } from '@material-ui/core'
import styles from './Navbar.module.scss'
import { HeaderNavigator } from '@components/core/HeaderNavigator'

export const Navbar = () => {
  return (
    <nav className={styles.navbarComponent}>
      <div className={styles.logoComponent}>
        <Link href="/" passHref>
          <a style={{ textDecoration: 'none' }}>
            <Image
              src="/assets/images/marvel_logo.png"
              alt="Marvel's logo"
              width={100}
              height={40}
              objectFit="contain"
            />

            <Typography className={styles.logoText} color="secondary">
              Marvel Catalog
            </Typography>
          </a>
        </Link>
      </div>

      <HeaderNavigator />
    </nav>
  )
}
