import React from "react"
import { Box } from "@rent_avail/layout"
import { useLevelEffect } from "components/elements/LevelEffect"

function TestimonialsCarouselItem({
  picture,
  altFallback,
  onClick,
  size = "4rem",
  filterColor = "white",
  level = 0,
  sx,
  ...props
}) {
  const { opacity, scale } = useLevelEffect({
    level,
    levelRange: [0, 2],
    opacityRange: [0, 0.75],
    scaleRange: [1, 0.625],
  })

  return (
    <Box
      position="relative"
      width={size}
      height={size}
      onClick={onClick}
      {...props}
      sx={{
        ...sx,
        width: `${4 * scale}rem`,
        height: `${4 * scale}rem`,
        flex: "none",
      }}
    >
      <Box
        className="pictureChild"
        position="absolute"
        background={filterColor}
        opacity={opacity}
        sx={{
          cursor: "pointer",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          borderRadius: "50%",
        }}
      />
      {picture && (
        <Box
          as="img"
          className="pictureChild"
          src={picture.url}
          alt={picture.alt || altFallback}
          title={picture.alt || altFallback}
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
          }}
        />
      )}
    </Box>
  )
}

export default TestimonialsCarouselItem
