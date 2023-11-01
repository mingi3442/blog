import { useEffect } from 'react'

export const usePushStateListener = (callback) => {
  useEffect(() => {
    // make a copy of original function to avoid complications
    const originalPushState = history.pushState

    history.pushState = function (data, title, url) {
      callback(url)
      originalPushState.apply(history, [data, title, url])
      return () => {
        history.pushState = originalPushState // restore the copy
      }
    }
  }, [callback])
}
