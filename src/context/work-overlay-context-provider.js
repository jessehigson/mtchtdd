import React, { createContext, useCallback, useState } from 'react'

export const WorkOverlayContext = createContext({
  workOverlayOpen: false,
  toggleWorkOverlay: () => {},
  closeWorkOverlay: () => {},
  imagesCounter: 0,
})

export const WorkOverlayContextProvider = ({ children }) => {
  const [workOverlayOpen, setWorkOverlayOpen] = useState(false)
  const [imagesCounter, setImagesCounter] = useState(0)

  const toggleWorkOverlay = useCallback(() => {
    setWorkOverlayOpen(workOverlayOpen => !workOverlayOpen)
  }, [setWorkOverlayOpen])

  const closeWorkOverlay = useCallback(() => {
    const link = document.activeElement
    if (link.closest('.work-overlay') && 'blur' in link) {
      link.blur()
    }
    setWorkOverlayOpen(false)
    setImagesCounter(imagesCounter + 1)
  }, [setWorkOverlayOpen, imagesCounter])

  return (
    <WorkOverlayContext.Provider
      value={{
        workOverlayOpen,
        toggleWorkOverlay,
        closeWorkOverlay,
        imagesCounter,
        setImagesCounter,
      }}
    >
      {children}
    </WorkOverlayContext.Provider>
  )
}

export default WorkOverlayContextProvider
