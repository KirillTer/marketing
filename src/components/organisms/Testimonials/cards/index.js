import React, { cloneElement, useRef } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useInViewAnimation } from "utils/animation"
import { Container, Box, Card, Stack } from "@rent_avail/layout"
import { Text } from "@rent_avail/typography"

import SkewBox from "components/molecules/SkewBox"
import { STYLING } from "config"
import useCards from "./use-cards"
import CardsControl from "./cards-control"

const TestimonialsStack = styled(Stack)`
  position: relative;
  display: inline-flex;
`

function TestimonialsCards({
  bg,
  title,
  testimonials,
  testimonialBg,
  testimonialColor,
  containerWidth,
  animationPreset = "fadeIn",
  ...props
}) {
  const containerRef = useRef()
  const scrollRef = useRef()
  const childrenRef = useRef([])

  const { scrollSpace, cardsControls } = useCards({
    containerRef,
    scrollRef,
    childrenRef,
  })

  const [presets, animationIntersectionView] = useInViewAnimation()
  const animation = presets[animationPreset]

  return (
    <SkewBox as={motion.aside} {...animation?.container} bg={bg} {...props}>
      <Container ref={containerRef} maxWidth={containerWidth}>
        <Box
          as={motion.aside}
          {...animation?.item}
          ref={animationIntersectionView}
        >
          {title &&
            cloneElement(title, {
              sx: { ...STYLING.headline, ...title?.props?.sx },
              mb: "2rem",
            })}
          <Box
            ref={scrollRef}
            sx={{
              padding: `0 ${scrollSpace}px 1rem ${scrollSpace}px`,
              margin: `0 -${scrollSpace}px`,
              overflow: "scroll",
              scrollBehavior: "smooth",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <TestimonialsStack
              wrapChildren
              direction={["row"]}
              sx={{
                "& > *:last-child": {
                  marginRight: 0,
                },
              }}
              forwardedAs={motion.div}
              {...animation?.container}
            >
              {testimonials.map(
                ({ picture, author, titleAndLocation, quote: Quote }, idx) => (
                  <Card
                    flex="1 0 auto"
                    as={motion.div}
                    {...animation?.item}
                    key={`${author}-${titleAndLocation}`}
                    ref={(el) => {
                      childrenRef.current[idx] = el
                    }}
                    bg={testimonialBg}
                    color={testimonialColor}
                    sx={{
                      width: "26rem",
                      height: "100%",
                      display: "flex",
                      gap: "1rem",
                      flexFlow: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      borderRadius: "12px",
                    }}
                  >
                    <Box flex={1}>
                      {typeof Quote === "function" ? <Quote /> : Quote}
                    </Box>
                    {picture && picture.url && (
                      <Box
                        as="img"
                        src={picture.url}
                        alt={picture.alt}
                        title={picture.alt}
                        width="4rem"
                        sx={{ borderRadius: "50%" }}
                      />
                    )}
                    <Box>
                      <h5>{author}</h5>
                      <Text>{titleAndLocation}</Text>
                    </Box>
                  </Card>
                )
              )}
            </TestimonialsStack>
          </Box>
          <CardsControl {...cardsControls} />
        </Box>
      </Container>
    </SkewBox>
  )
}

export default TestimonialsCards
