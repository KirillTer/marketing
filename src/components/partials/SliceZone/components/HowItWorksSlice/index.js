import React from "react"
import Anchor from "components/elements/Anchor"
import { HowItWorks } from "components/organisms/HowItWorks"
import { CONTAINER_WIDTHS, Typography } from "config"
import RichText from "../RichText"

const HowItWorksSlice = ({ slice }) => {
  const {
    primary: { title, background, flip, hash },
  } = slice
  // eslint-disable-next-line no-shadow
  const sections = slice.items.map(({ title, description, image }, idx) => ({
    uid: title?.[0]?.text || idx,
    copy: (
      <React.Fragment>
        <RichText render={title} mb="2rem" sx={{ ...Typography.H3 }} />
        <RichText render={description} />
      </React.Fragment>
    ),
    image,
  }))
  return (
    <React.Fragment>
      {hash && <Anchor hash={hash} />}
      <HowItWorks
        title={<RichText render={title} />}
        sections={sections}
        bg={background}
        containerWidth={CONTAINER_WIDTHS}
        py="5rem"
        alternate={flip ? (idx) => idx % 2 === 0 : undefined}
        color={background === "blue_500" ? "blue_100" : "inherit"}
      />
    </React.Fragment>
  )
}

export default HowItWorksSlice
