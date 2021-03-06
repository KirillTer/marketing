import { Box, Card, Flex } from "@rent_avail/layout"
import { motion } from "framer-motion"
import React, { cloneElement } from "react"
import { Text } from "@rent_avail/typography"
import { useInViewAnimation } from "utils/animation"
import styled from "styled-components"
import { variant } from "styled-system"

const PlanContainer = styled(Flex)(
  {
    gap: "2rem",
    "& > *": {
      minHeight: "fit-content",
      minWidth: "fit-content",
    },
  },
  variant({
    prop: "direction",
    variants: {
      vertical: {
        flexFlow: "row wrap",
        width: "100%",
      },
      horizontal: {
        flexFlow: "column wrap",
        height: "100%",
      },
    },
  })
)

export default function PlanCard({
  image,
  title,
  price,
  subtext,
  description,
  features: Features,
  button,
  buttonColor,
  buttonBackground,
  background,
  color,
  direction,
  animationPreset = "fadeIn",
}) {
  const [presets, intersectionView] = useInViewAnimation({
    containerDuration: "default",
    threshold: 0.25,
  })
  const animation = presets[animationPreset]

  return (
    <Card
      as={motion.aside}
      {...animation?.container}
      flex="auto"
      bg={background}
      color={color}
      border="none"
      ref={intersectionView}
    >
      <PlanContainer direction={direction}>
        <Flex
          flex="1"
          flexDirection="column"
          alignItems="center"
          sx={{
            gap: "1rem",
          }}
        >
          {image && image.url && (
            <Box
              as={motion.img}
              {...animation?.item}
              src={image.url}
              alt={image.alt}
              title={image.alt}
              width="70px"
              height="70px"
              borderRadius="50%"
            />
          )}
          {title && (
            <Text as={motion.aside} {...animation?.item} fontSize="2rem">
              {title}
            </Text>
          )}
          {price && (
            <Text as={motion.aside} {...animation?.item} fontSize="4rem">
              {price}
            </Text>
          )}
          {subtext && (
            <Text
              as={motion.aside}
              {...animation?.item}
              fontSize="1.5rem"
              opacity="0.5"
            >
              {subtext}
            </Text>
          )}
          {description && (
            <Text
              as={motion.aside}
              {...animation?.item}
              fontSize="1.5rem"
              fontWeight="800"
            >
              {description}
            </Text>
          )}
        </Flex>
        <Flex flex="1" flexDirection="column" sx={{ gap: "2rem" }}>
          <Box as={motion.aside} {...animation?.item} textAlign="left">
            {typeof Features === "function" ? <Features /> : Features}
          </Box>
          <Box as={motion.aside} {...animation?.item} mt="auto">
            {button &&
              cloneElement(button, {
                display: "block",
                color: buttonColor,
                backgroundColor: buttonBackground,
                borderColor: buttonBackground,
              })}
          </Box>
        </Flex>
      </PlanContainer>
    </Card>
  )
}
