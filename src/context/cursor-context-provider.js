import React, { createContext, useCallback, useState } from 'react'

export const CursorContext = createContext({
  cursorActive: false,
  toggleCursorActive: () => {},
})

export const CursorContextProvider = ({ children }) => {
  const [cursorActive, setCursorActive] = useState(false)

  const toggleCursorActive = useCallback(() => {
    setCursorActive(cursorActive => !cursorActive)
  }, [setCursorActive])

  return (
    <CursorContext.Provider value={{ cursorActive, toggleCursorActive }}>
      {children}
    </CursorContext.Provider>
  )
}

export default CursorContextProvider
