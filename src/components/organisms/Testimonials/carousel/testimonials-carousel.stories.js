import React from "react"
import { Text } from "@rent_avail/typography"
import { Box } from "@rent_avail/layout"
import { Testimonials } from "./index"

export default { title: "Components/TestimonialsCarousel" }

function Quote() {
  return (
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus
      officiis tenetur, ex tempora repellat quibusdam, ab soluta neque incidunt
      magni earum architecto veritatis rerum optio consectetur adipisci minus
      dicta.
    </Text>
  )
}

export function Default() {
  const testimonials = [
    {
      picture: { url: "/send-money.png", alt: "" },
      author: "Paul",
      titleAndLocation: "Tenant in Liverpool, UK",
      aditionalInfo: "1 Unit",
      quote: Quote,
    },
    {
      picture: { url: "/state-specific.png", alt: "" },
      author: "Jhon",
      titleAndLocation: "Tenant in Liverpool, UK",
      quote: Quote,
    },
    {
      picture: { url: "/user-card.png", alt: "" },
      author: "George",
      titleAndLocation: "Tenant in Liverpool, UK",
      aditionalInfo: "3 Units",
      quote: Quote,
    },
    {
      picture: { url: "/property-damage.png", alt: "" },
      author: "Ringo",
      titleAndLocation: "Landlord in Liverpool, UK",
      aditionalInfo: "4 Units",
      quote: Quote,
    },
  ]
  return (
    <Testimonials
      bg="#F9F9F9"
      titleBackground="#E9EDF1"
      skew="right"
      title={<Box as="h2">Testimonials</Box>}
      testimonials={testimonials}
    />
  )
}

export function WithTwoItems() {
  const testimonials = [
    {
      picture: { url: "/property-damage.png", alt: "" },
      author: "Jules",
      titleAndLocation: "Tenant in Los Angeles, CA",
      quote: Quote,
    },
    {
      picture: { url: "/send-money.png", alt: "" },
      author: "Vincent",
      titleAndLocation: "Tenant in Redondo Beach, CA",
      quote: Quote,
    },
  ]
  return (
    <Testimonials
      bg="#0B2E51"
      color="#FFF"
      titleBackground="#777"
      skew="left"
      title={<Box as="h2">Testimonials</Box>}
      testimonials={testimonials}
    />
  )
}

export function WithTwelveItems() {
  const testimonials = [
    {
      picture: { url: "/send-money.png", alt: "" },
      author: "Danny",
      titleAndLocation: "Landlord in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/state-specific.png", alt: "" },
      author: "Rusty",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/user-card.png", alt: "" },
      author: "Linus",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/property-damage.png", alt: "" },
      author: "Frank",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/send-money.png", alt: "" },
      author: "Reuben",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/state-specific.png", alt: "" },
      author: "Virgil",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/user-card.png", alt: "" },
      author: "Turk",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/property-damage.png", alt: "" },
      author: "Livingston",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/send-money.png", alt: "" },
      author: "Basher",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/state-specific.png", alt: "" },
      author: "Yen",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/user-card.png", alt: "" },
      author: "Saul",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/property-damage.png", alt: "" },
      author: "Tess",
      titleAndLocation: "Landlord in Las Vegas, NV",
      quote: Quote,
    },
  ]
  return (
    <Testimonials
      orientation="left"
      title={<Box as="h2">Testimonials</Box>}
      testimonials={testimonials}
    />
  )
}
