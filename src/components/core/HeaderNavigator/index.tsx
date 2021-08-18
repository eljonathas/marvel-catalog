import { useRouter } from 'next/router'

import { Typography } from '@material-ui/core'

import { useCurrentPage } from '@hooks/useCurrentPage'

import styles from './HeaderNavigator.module.scss'

export const HeaderNavigator = () => {
  const router = useRouter()

  const { currentPage, setCurrentPageValue } = useCurrentPage()

  function handleChangePage(page: string) {
    const resolvePage = page.substring(1)

    router.push(page)
    setCurrentPageValue(resolvePage || 'index')
  }

  return (
    <ul className={styles.headerNavbarList}>
      <li onClick={() => handleChangePage('/')}>
        <Typography
          color={currentPage === 'index' ? 'textPrimary' : 'textSecondary'}
        >
          Home
        </Typography>
      </li>
      <li onClick={() => handleChangePage('/series')}>
        <Typography
          color={currentPage === 'series' ? 'textPrimary' : 'textSecondary'}
        >
          Series
        </Typography>
      </li>
      <li onClick={() => handleChangePage('/comics')}>
        <Typography
          color={currentPage === 'comics' ? 'textPrimary' : 'textSecondary'}
        >
          Comics
        </Typography>
      </li>
      <li onClick={() => handleChangePage('/stories')}>
        <Typography
          color={currentPage === 'stories' ? 'textPrimary' : 'textSecondary'}
        >
          Stories
        </Typography>
      </li>
      <li onClick={() => handleChangePage('/events')}>
        <Typography
          color={currentPage === 'events' ? 'textPrimary' : 'textSecondary'}
        >
          Events
        </Typography>
      </li>
      <li onClick={() => handleChangePage('/characters')}>
        <Typography
          color={currentPage === 'characters' ? 'textPrimary' : 'textSecondary'}
        >
          Characters
        </Typography>
      </li>
    </ul>
  )
}
