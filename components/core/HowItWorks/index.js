import * as React from "react"
import styled from "styled-components"
import { Box, Container, Grid, Col } from "@rent_avail/layout"
import { Text, Heading } from "@rent_avail/typography"

function HowItWorks({
  title,
  eyebrow,
  sections = [],
  alternate = (idx) => idx % 2 !== 0,
  ...props
}) {
  return (
    <Box {...props}>
      <Container>
        {eyebrow && (
          <Text color="blue_500" mb="1rem">
            {eyebrow}
          </Text>
        )}
        {title && React.cloneElement(title, { mb: "4rem" })}
        {sections.map((section, idx) => (
          <HowItWorksSection
            {...section}
            key={section.uid}
            flip={alternate(idx)}
            mb={idx !== sections.length - 1 ? "6rem" : 0}
          />
        ))}
      </Container>
    </Box>
  )
}

function HowItWorksSection({ copy, image = null, flip, mb }) {
  const copyColumn = ["span 12", flip ? "7 / span 6" : "1 / span 6"]
  const imageColumn = ["span 12", flip ? "1 / span 6" : "7 / span 6"]
  return (
    <Grid alignItems="center" gridAutoFlow="row dense" mb={mb}>
      <Col gridColumn={copyColumn}>{copy}</Col>
      <Col as="img" src={image.url} gridColumn={imageColumn} maxWidth="100%" />
    </Grid>
  )
}

export { HowItWorks }
