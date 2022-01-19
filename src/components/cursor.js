import React, { useEffect, useRef } from 'react'

const Cursor = () => {
  const cursor = useRef(null)
  const endX = useRef(0)
  const endY = useRef(0)

  const moveCursor = event => {
    endX.current = event.pageX
    endY.current = event.pageY

    cursor.current.style.top = endY.current + 'px'
    cursor.current.style.left = endX.current + 'px'
  }

  useEffect(() => {
    document.addEventListener('mousemove', moveCursor)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
    }
  })

  return (
    <>
      <span className="cursor" ref={cursor}></span>
    </>
  )
}

export default Cursor
