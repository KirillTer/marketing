import React, { cloneElement } from "react"
import styled from "styled-components"
import Link from "next/link"
import { Container, Box, Grid, Col, Stack } from "@rent_avail/layout"
import { Heading } from "@rent_avail/typography"
import { Button } from "@rent_avail/controls"

const HeroWrapper = styled(Box)`
  position: relative;
  .skew {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme, skewBg }) =>
      skewBg ? theme.colors[skewBg] || skewBg : theme.colors.ui_100};
    z-index: -1;
    transform: skewY(${({ skew }) => (skew === "right" ? 4 : -4)}deg);
    transform-origin: top ${({ skew }) => skew};
  }
`

function Hero({
  bg,
  skew = "right",
  description,
  title,
  image = null,
  primaryLink,
  secondaryLink,
  ...props
}) {
  const links = primaryLink || secondaryLink
  return (
    <HeroWrapper {...props} skewBg={bg} skew={skew} pt="4rem" pb="10rem">
      <div className="skew" />
      <Container
        as={Grid}
        minHeight="calc(90vh - 14rem)"
        alignItems="center"
        gap={["2rem", "4rem"]}
      >
        <Col span={image ? [12, 6] : [12]}>
          {cloneElement(title, { fontSize: image ? "4rem" : "5rem" })}
          <Box mt="2rem">{description}</Box>
          {links && (
            <Stack wrapChildren direction={["row"]} mt="2rem">
              {primaryLink && (
                <Link href={primaryLink.url}>
                  <Button variant="primary">{primaryLink.text}</Button>
                </Link>
              )}
              {secondaryLink && (
                <Link href={secondaryLink.url}>
                  <Button>{secondaryLink.text}</Button>
                </Link>
              )}
            </Stack>
          )}
        </Col>
        {image && (
          <Col
            as="img"
            src={image}
            span={[12, 6]}
            gridRow={["1", "auto"]}
            maxWidth="100%"
          />
        )}
      </Container>
    </HeroWrapper>
  )
}

export { Hero }
