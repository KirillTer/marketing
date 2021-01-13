import React from "react"
import { Box } from "@rent_avail/layout"
import { ButtonCTA } from "./index"

export default { title: "Components/ButtonCTA" }

export function Default() {
  return (
    <ButtonCTA
      title={<Box as="h1">Button CTA Title</Box>}
      buttonText="Button"
      buttonLink={<a href="https://avail.co">Avail</a>}
      orientation="left"
    />
  )
}

export function Top() {
  return (
    <ButtonCTA
      title={<Box as="h1">🔝 CTA Title</Box>}
      buttonText="Button"
      buttonLink={<a href="https://avail.co">Avail</a>}
      orientation="top"
    />
  )
}

export function Right() {
  return (
    <ButtonCTA
      title={<Box as="h1">Right Button CTA Title</Box>}
      buttonText="I'm left"
      buttonLink={<a href="https://avail.co">Avail</a>}
      orientation="right"
    />
  )
}

export function Bottom() {
  return (
    <ButtonCTA
      title={<Box as="h1">Bottom CTA Title</Box>}
      buttonText="Bottom?"
      buttonLink={<a href="https://avail.co">Avail</a>}
      orientation="bottom"
    />
  )
}

export function NoTitle() {
  return (
    <ButtonCTA
      buttonText="Lonely Button"
      buttonLink={<a href="https://avail.co">Avail</a>}
      orientation="left"
    />
  )
}

export function NoButton() {
  return <ButtonCTA title={<Box as="h1">Lonely Button CTA Title</Box>} />
}
