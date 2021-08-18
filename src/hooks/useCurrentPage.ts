import { useContext } from 'react'

import { PageItemContext } from '@contexts/PageItemContext'

export const useCurrentPage = () => useContext(PageItemContext)
