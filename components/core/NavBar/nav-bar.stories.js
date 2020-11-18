import React from "react"
import { Text } from "@rent_avail/typography"
import { Container } from "@rent_avail/layout"
import NavBar from "./index"

export default {
  title: "Components/NavBar",
}

export function Default() {
  const links = [
    { text: "Overview", href: "#overview", breakpoint: "40rem" },
    { text: "Features", href: "#features", breakpoint: "80rem" },
    { text: "Use cases", href: "#use-cases", breakpoint: "100rem" },
    { text: "Pricing", href: "#pricing", push: true, breakpoint: "40rem" },
    {
      text: "Create account",
      href: "https://www.avail.co/users/new",
      primary: true,
      push: true,
    },
  ]
  return (
    <React.Fragment>
      <NavBar links={links} sticky />
      <Container maxWidth="40rem">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
          elit sit amet quam iaculis dignissim. Ut malesuada, risus non mollis
          imperdiet, tellus arcu sagittis odio, vitae consectetur felis est nec
          purus. Sed et sagittis erat. Integer eu diam sit amet lacus aliquam
          interdum. Curabitur molestie metus at augue gravida tincidunt. Aenean
          ultrices dignissim ipsum ac sagittis. Suspendisse potenti. Morbi
          iaculis sem volutpat, fermentum nisi sed, sodales lacus. Aliquam
          pretium ex nec neque imperdiet, a lacinia est volutpat. Duis eu
          elementum erat. Maecenas rhoncus magna elit, a volutpat ex tristique
          eu. Maecenas porta, magna id hendrerit maximus, lacus ex pretium elit,
          sit amet congue mi lacus nec velit. Morbi dapibus sapien in sem
          euismod ultricies.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
          elit sit amet quam iaculis dignissim. Ut malesuada, risus non mollis
          imperdiet, tellus arcu sagittis odio, vitae consectetur felis est nec
          purus. Sed et sagittis erat. Integer eu diam sit amet lacus aliquam
          interdum. Curabitur molestie metus at augue gravida tincidunt. Aenean
          ultrices dignissim ipsum ac sagittis. Suspendisse potenti. Morbi
          iaculis sem volutpat, fermentum nisi sed, sodales lacus. Aliquam
          pretium ex nec neque imperdiet, a lacinia est volutpat. Duis eu
          elementum erat. Maecenas rhoncus magna elit, a volutpat ex tristique
          eu. Maecenas porta, magna id hendrerit maximus, lacus ex pretium elit,
          sit amet congue mi lacus nec velit. Morbi dapibus sapien in sem
          euismod ultricies.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
          elit sit amet quam iaculis dignissim. Ut malesuada, risus non mollis
          imperdiet, tellus arcu sagittis odio, vitae consectetur felis est nec
          purus. Sed et sagittis erat. Integer eu diam sit amet lacus aliquam
          interdum. Curabitur molestie metus at augue gravida tincidunt. Aenean
          ultrices dignissim ipsum ac sagittis. Suspendisse potenti. Morbi
          iaculis sem volutpat, fermentum nisi sed, sodales lacus. Aliquam
          pretium ex nec neque imperdiet, a lacinia est volutpat. Duis eu
          elementum erat. Maecenas rhoncus magna elit, a volutpat ex tristique
          eu. Maecenas porta, magna id hendrerit maximus, lacus ex pretium elit,
          sit amet congue mi lacus nec velit. Morbi dapibus sapien in sem
          euismod ultricies.
        </Text>
      </Container>
    </React.Fragment>
  )
}
