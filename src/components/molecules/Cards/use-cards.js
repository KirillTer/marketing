import { useCallback, useEffect, useState, useRef } from "react"
import { useResize } from "@rent_avail/utils"
import useCardsControl from "./use-cards-control"

function useCards({ containerRef, scrollRef, childrenRef }) {
  const containerObserver = useRef()

  const containerRect = useResize(containerRef)

  const [scrollSpace, setScrollSpace] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container || !getComputedStyle) return
    const { marginLeft, paddingLeft } = getComputedStyle(container)
    setScrollSpace(parseInt(marginLeft, 10) + parseInt(paddingLeft, 10))
  }, [containerRect])

  const scroll = useCallback(
    (to) => {
      const clipped = childrenRef.current.find(
        ({ offsetLeft, offsetWidth }) =>
          offsetLeft + offsetWidth - scrollRef.current.scrollLeft >
          (to === "left" ? -1 : 1) * containerRect.width
      )
      if (clipped) {
        scrollRef.current.scrollTo(clipped.offsetLeft, 0)
      }
    },
    [containerRect, scrollRef, childrenRef]
  )

  const [cardsControls, { setLeftEnabled, setRightEnabled }] = useCardsControl({
    scrollLeft: () => scroll("left"),
    scrollRight: () => scroll("right"),
  })

  useEffect(() => {
    containerObserver.current?.disconnect()

    function observerCb(entries) {
      entries.forEach((entry) => {
        const isVisible = entry.isIntersecting
        const { previousSibling, nextSibling } = entry.target.parentElement
        if (previousSibling === null) setLeftEnabled(!isVisible)
        if (nextSibling === null) setRightEnabled(!isVisible)
      })
    }
    const observerOptions = {
      root: containerRef.current,
      threshold: 1.0,
    }
    containerObserver.current = new IntersectionObserver(
      observerCb,
      observerOptions
    )

    const first = childrenRef.current[0]
    if (first) containerObserver.current.observe(first)

    const last = childrenRef.current[childrenRef.current.length - 1]
    if (last) containerObserver.current.observe(last)

    return () => {
      containerObserver.current?.disconnect()
    }
  }, [containerRef, childrenRef])

  return {
    scrollSpace,
    cardsControls,
  }
}

export default useCards
