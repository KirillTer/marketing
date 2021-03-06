import React from "react"
import { Text } from "@rent_avail/typography"
import { Box } from "@rent_avail/layout"
import TestimonialsCarousel from "./index"

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
      picture: { url: "/media/testimonials-sample-01.jpg", alt: "" },
      author: "Paul",
      titleAndLocation: "Tenant in Liverpool, UK",
      additionalInfo: "1 Unit",
      quote: <Text>Quote</Text>,
    },
    {
      picture: { url: "/media/testimonials-sample-02.jpg", alt: "" },
      author: "Jhon",
      titleAndLocation: "Tenant in Liverpool, UK",
      quote: Quote,
    },
    {
      picture: { url: "/media/testimonials-sample-01.jpg", alt: "" },
      author: "George",
      titleAndLocation: "Tenant in Liverpool, UK",
      additionalInfo: "3 Units",
      quote: Quote,
    },
    {
      picture: { url: "/media/testimonials-sample-02.jpg", alt: "" },
      author: "Ringo",
      titleAndLocation: "Landlord in Liverpool, UK",
      additionalInfo: "4 Units",
      quote: Quote,
    },
  ]
  return (
    <TestimonialsCarousel
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
      picture: { url: "/media/testimonials-sample-01.jpg", alt: "" },
      author: "Jules",
      titleAndLocation: "Tenant in Los Angeles, CA",
      quote: Quote,
    },
    {
      picture: { url: "/media/testimonials-sample-02.jpg", alt: "" },
      author: "Vincent",
      titleAndLocation: "Tenant in Redondo Beach, CA",
      quote: Quote,
    },
  ]
  return (
    <TestimonialsCarousel
      bg="blue_700"
      color="#FFF"
      titleBackground="blue_500"
      skew="left"
      title={<Box as="h2">Testimonials</Box>}
      testimonials={testimonials}
    />
  )
}

export function WithTwelveItems() {
  const testimonials = [
    {
      picture: { url: "/media/testimonials-sample-01.jpg", alt: "" },
      author: "Danny",
      titleAndLocation: "Landlord in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/media/testimonials-sample-02.jpg", alt: "" },
      author: "Rusty",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/media/testimonials-sample-01.jpg", alt: "" },
      author: "Linus",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/media/testimonials-sample-02.jpg", alt: "" },
      author: "Frank",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/media/testimonials-sample-01.jpg", alt: "" },
      author: "Reuben",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/media/testimonials-sample-02.jpg", alt: "" },
      author: "Virgil",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/media/testimonials-sample-01.jpg", alt: "" },
      author: "Turk",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/media/testimonials-sample-02.jpg", alt: "" },
      author: "Livingston",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/media/testimonials-sample-01.jpg", alt: "" },
      author: "Basher",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/media/testimonials-sample-02.jpg", alt: "" },
      author: "Yen",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/media/testimonials-sample-01.jpg", alt: "" },
      author: "Saul",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/media/testimonials-sample-02.jpg", alt: "" },
      author: "Tess",
      titleAndLocation: "Landlord in Las Vegas, NV",
      quote: Quote,
    },
  ]
  return (
    <TestimonialsCarousel
      orientation="left"
      title={<Box as="h2">Testimonials</Box>}
      testimonials={testimonials}
    />
  )
}
