import React, { createContext, useCallback, useState } from 'react'

export const CursorContext = createContext({
  isActive: false,
  toggleIsActive: () => {},
})

export const CursorContextProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false)

  const toggleIsActive = useCallback(() => {
    setIsActive(isActive => !isActive)
  }, [setIsActive])

  return (
    <CursorContext.Provider value={{ isActive, toggleIsActive }}>
      {children}
    </CursorContext.Provider>
  )
}

export default CursorContextProvider
