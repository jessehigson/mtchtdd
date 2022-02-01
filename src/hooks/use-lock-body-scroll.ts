import { useEffect } from 'react'

function useLockBodyScroll(toggle: boolean): void {
  useEffect(() => {
    document.body.style.overflowY = toggle ? 'hidden' : 'visible'
    return () => {
      document.body.style.overflowY = 'visible'
    }
  }, [toggle])
}

export default useLockBodyScroll
