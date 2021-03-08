import { useState } from "react"

function useCardsControl({ scrollLeft, scrollRight }) {
  const [leftEnabled, setLeftEnabled] = useState(false)
  const [rightEnabled, setRightEnabled] = useState(false)

  return [
    {
      leftEnabled,
      rightEnabled,
      onClickLeft: () => leftEnabled && scrollLeft(),
      onClickRight: () => rightEnabled && scrollRight(),
    },
    {
      setLeftEnabled,
      setRightEnabled,
    },
  ]
}

export default useCardsControl
