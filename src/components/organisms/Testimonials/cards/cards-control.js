import React from "react"
import { Box } from "@rent_avail/layout"
import { ChevronLeft, ChevronRight } from "react-feather"

function CardsControl({
  leftEnabled,
  rightEnabled,
  onClickLeft,
  onClickRight,
  alwaysShow = false,
}) {
  const show = alwaysShow || leftEnabled || rightEnabled
  return show ? (
    <Box
      sx={{
        textAlign: "right",
        "> *": {
          margin: "1rem",
          "&.scrollControlEnabled": {
            cursor: "pointer",
            opacity: 0.9,
            "&::hover": {
              opacity: 1,
            },
          },
          "&.scrollControlDisabled": {
            opacity: 0.3,
          },
        },
      }}
    >
      <ChevronLeft
        onClick={() => leftEnabled && onClickLeft()}
        className={
          leftEnabled ? "scrollControlEnabled" : "scrollControlDisabled"
        }
      />
      <ChevronRight
        onClick={() => rightEnabled && onClickRight()}
        className={
          rightEnabled ? "scrollControlEnabled" : "scrollControlDisabled"
        }
      />
    </Box>
  ) : null
}

export default CardsControl
