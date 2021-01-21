import React, { cloneElement } from "react"
import styled from "styled-components"
import { Container, Box, Grid, Col, Stack } from "@rent_avail/layout"
import { STYLING } from "config"
import { FadeIn } from "components/fadeIn"

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
  imagePosition = "right",
  primaryLink,
  secondaryLink,
  containerWidth,
  children,
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
        gap={["2rem", "2rem", "4rem"]}
        {...(containerWidth ? { maxWidth: containerWidth } : null)}
      >
        <Col span={image ? [12, 12, 12, 6] : [12]}>
          <FadeIn transition={{ delay: 0.8 }}>
            {cloneElement(title, {
              sx: {
                ...(image ? STYLING.headline : STYLING.hero),
                fontWeight: ["regular", "light"],
                ...title.props?.sx,
              },
            })}
            <Box mt="2rem">{description}</Box>
            {links && (
              <Stack wrapChildren direction={["column", "row"]} mt="2rem">
                {primaryLink}
                {secondaryLink}
              </Stack>
            )}
          </FadeIn>
          <FadeIn transition={{ delay: 1.2 }}>
            {children}
          </FadeIn>
        </Col>
        {image && (
          <Col
            span={[12, 12, 12, 6]}
            gridRow={["1", "1", "1", "auto"]}
            order={imagePosition === "left" ? -1 : 1}
            sx={{ textAlign: "center" }}
          >
            <FadeIn transition={{ delay: 0.5, duration: 1.2 }}>
              <Box
                as="img"
                src={image.url}
                alt={image.alt}
                title={image.alt}
                maxWidth={["100%", "50%", "50%", "100%"]}
              />
            </FadeIn>
          </Col>
        )}
      </Container>
    </HeroWrapper>
  )
}

export { Hero }
