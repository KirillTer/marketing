import React, { cloneElement, useRef } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

import { useInViewAnimation } from "utils/animation"
import { Container, Box, Card, Stack } from "@rent_avail/layout"
import { Text } from "@rent_avail/typography"
import { CardsControl, useCards } from "components/molecules/Cards"
import SkewBox from "components/molecules/SkewBox"
import { STYLING } from "config"

const CarouselBox = styled(Box)`
  overflow: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`
const TestimonialsStack = styled(Stack)`
  position: relative;
  display: inline-flex;
`

const Testimonial = styled(Card)`
  flex: 1 0 auto;
  width: 26rem;
  height: 100%;
  display: flex;
  gap: 1rem;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 12px;
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
          <CarouselBox
            ref={scrollRef}
            pb="1rem"
            mx={`-${scrollSpace}px`}
            px={`${scrollSpace}px`}
          >
            <TestimonialsStack
              wrapChildren
              direction={["row"]}
              sx={{ "& > *:last-child": { marginRight: 0 } }}
              forwardedAs={motion.div}
              {...animation?.container}
            >
              {testimonials.map(
                ({ picture, author, titleAndLocation, quote: Quote }, idx) => (
                  <Testimonial
                    as={motion.div}
                    {...animation?.item}
                    key={`${author}-${titleAndLocation}`}
                    ref={(el) => {
                      childrenRef.current[idx] = el
                    }}
                    bg={testimonialBg}
                    color={testimonialColor}
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
                  </Testimonial>
                )
              )}
            </TestimonialsStack>
          </CarouselBox>
          <CardsControl {...cardsControls} />
        </Box>
      </Container>
    </SkewBox>
  )
}

export default TestimonialsCards
