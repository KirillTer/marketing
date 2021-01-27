import React, { cloneElement } from "react"
import { Box } from "@rent_avail/layout"
import { useInViewAnimation } from "components/@rent_avail/utils"
import EmailCaptureInput from "components/molecules/EmailCaptureInput"
import { STYLING } from "config"
import { motion } from "framer-motion"

function EmailCapture({
  containerBg,
  title,
  inputLabel,
  inputLabelId,
  buttonText,
  buttonUrl,
  queryParamName,
  animationPreset = "fadeIn",
}) {
  const [presets, intersectionView] = useInViewAnimation()
  const animation = presets[animationPreset]

  return (
    <Box ref={intersectionView}>
      {title && (
        <motion.aside {...animation}>
          {cloneElement(title, {
            my: "2.5rem",
            sx: { ...STYLING.title, ...title.props?.sx },
          })}
        </motion.aside>
      )}
      <motion.aside
        {...animation}
        transition={{
          ...animation.transition,
          delay: 0.75,
        }}
      >
        <EmailCaptureInput
          inputLabel={inputLabel}
          inputLabelId={inputLabelId}
          buttonText={buttonText}
          buttonUrl={buttonUrl}
          queryParamName={queryParamName}
          background={containerBg}
        />
      </motion.aside>
    </Box>
  )
}

export default EmailCapture
