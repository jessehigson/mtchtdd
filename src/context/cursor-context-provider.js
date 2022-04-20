import React, { createContext, useCallback, useState } from 'react'

export const CursorContext = createContext({
  cursorActive: false,
  activateCursor: () => {},
  deactivateCursor: () => {},
})

export const CursorContextProvider = ({ children }) => {
  const [cursorActive, setCursorActive] = useState(false)

  const activateCursor = useCallback(() => {
    setCursorActive(true)
    console.log('testing 1')
  }, [setCursorActive])

  const deactivateCursor = useCallback(() => {
    setCursorActive(false)
    console.log('testing 2')
  }, [setCursorActive])

  return (
    <CursorContext.Provider
      value={{
        cursorActive,
        activateCursor,
        deactivateCursor,
      }}
    >
      {children}
    </CursorContext.Provider>
  )
}

export default CursorContextProvider
