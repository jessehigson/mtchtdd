import React, { createContext, useCallback, useState } from 'react'

export const WorkOverlayContext = createContext({
  workOverlayOpen: false,
  toggleWorkOverlay: () => {},
  closeWorkOverlay: () => {},
})

export const WorkOverlayContextProvider = ({ children }) => {
  const [workOverlayOpen, setWorkOverlayOpen] = useState(false)

  const toggleWorkOverlay = useCallback(() => {
    setWorkOverlayOpen(workOverlayOpen => !workOverlayOpen)
  }, [setWorkOverlayOpen])

  const closeWorkOverlay = useCallback(() => {
    const link = document.activeElement
    if (link.closest('.work-overlay') && 'blur' in link) {
      link.blur()
    }
    setWorkOverlayOpen(false)
  }, [setWorkOverlayOpen])

  return (
    <WorkOverlayContext.Provider
      value={{ workOverlayOpen, toggleWorkOverlay, closeWorkOverlay }}
    >
      {children}
    </WorkOverlayContext.Provider>
  )
}

export default WorkOverlayContextProvider
