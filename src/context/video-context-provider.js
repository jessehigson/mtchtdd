import React, { createContext, useCallback, useState } from 'react'

export const VideoContext = createContext({
  isPlaying: true,
  toggleIsPlaying: () => {},
})

export const VideoContextProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(true)

  const toggleIsPlaying = useCallback(() => {
    setIsPlaying(isPlaying => !isPlaying)
  }, [setIsPlaying])

  return (
    <VideoContext.Provider value={{ isPlaying, toggleIsPlaying }}>
      {children}
    </VideoContext.Provider>
  )
}

export default VideoContextProvider
