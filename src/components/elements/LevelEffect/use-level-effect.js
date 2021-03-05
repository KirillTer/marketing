import { useEffect } from "react"
import { useSpring, useTransform } from "framer-motion"

function useLevelEffect({
  level = 0,
  levelRange = [0, 1],
  opacityRange = [0, 0.75],
  scaleRange = [1, 0.5],
}) {
  const motionLevel = useSpring(level)
  const { current: opacity } = useTransform(
    motionLevel,
    levelRange,
    opacityRange
  )
  const { current: scale } = useTransform(motionLevel, levelRange, scaleRange)

  useEffect(() => {
    motionLevel.set(level)
    return () => motionLevel.destroy()
  }, [level])

  return { opacity, scale }
}

export default useLevelEffect
