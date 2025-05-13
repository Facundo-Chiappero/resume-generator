import { NAVIGATION } from "@utils/consts"
import { useEffect, useState } from "react"

export function useNavigation() {
  useEffect(() => {
    const originalPushState = window.history.pushState
    window.history.pushState = function (...args) {
      const result = originalPushState.apply(this, args)
      window.dispatchEvent(new Event(NAVIGATION.EVENTS.PUSHSTATE))
      return result
    }
  }, [])
  const [currentPage, setCurrentPage] = useState(() => {
    return window.location.pathname || NAVIGATION.HOME.NAME
  })

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPage(window.location.pathname)
    }

    window.addEventListener(NAVIGATION.EVENTS.POPSTATE, onLocationChange)
    window.addEventListener(NAVIGATION.EVENTS.PUSHSTATE, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION.EVENTS.POPSTATE, onLocationChange)
      window.removeEventListener(NAVIGATION.EVENTS.PUSHSTATE, onLocationChange)
    }
  }, [])

  const navigate = (page: string) => {
    window.history.pushState({}, "", page)
  }

  return { currentPage, navigate }
}
