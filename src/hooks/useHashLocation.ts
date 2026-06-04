import { useState, useEffect } from 'react'

export function useHashLocation() {
  const [loc, setLoc] = useState(window.location.hash || '#/')

  useEffect(() => {
    const handleHashChange = () => {
      setLoc(window.location.hash || '#/')
    }
    
    // Set initial hash if empty
    if (!window.location.hash) {
      window.location.hash = '#/'
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigate = (to: string) => {
    window.location.hash = to
  }

  return [loc, navigate] as const
}
