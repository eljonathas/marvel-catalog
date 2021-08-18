import { createContext, useState, FC } from 'react'
import { useRouter } from 'next/router'

type PageItemContextProps = {
  currentPage: string
  setCurrentPageValue: (page: string) => void
}

export const PageItemContext = createContext({} as PageItemContextProps)

export const PageItemProvider: FC = ({ children }) => {
  const router = useRouter()
  const currentPath = router.pathname

  const [currentPage, setCurrentPage] = useState(
    currentPath.substr(1) || 'index'
  )

  function setCurrentPageValue(page: string) {
    setCurrentPage(page)
  }

  return (
    <PageItemContext.Provider
      value={{
        currentPage,
        setCurrentPageValue
      }}
    >
      {children}
    </PageItemContext.Provider>
  )
}
