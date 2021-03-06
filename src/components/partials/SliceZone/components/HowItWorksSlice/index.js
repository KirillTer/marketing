import React from "react"
import Anchor from "components/elements/Anchor"
import { HowItWorks } from "components/organisms/HowItWorks"
import { CONTAINER_WIDTHS, STYLING } from "config"
import Embed from "../Embed"
import RichText from "../RichText"

const HowItWorksSlice = ({ slice }) => {
  const {
    primary: { title, background, flip, hash },
  } = slice
  const sections = slice.items.map(
    // eslint-disable-next-line no-shadow
    ({ title, description, image, video, embed }, idx) => ({
      uid: title?.[0]?.text || idx,
      copy: (
        <React.Fragment>
          <RichText render={title} mb="2rem" sx={{ ...STYLING.title }} />
          <RichText render={description} />
        </React.Fragment>
      ),
      image,
      video,
      embed: embed?.html && <Embed embed={embed} />,
    })
  )
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
