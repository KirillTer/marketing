import React from "react"
import Showcase from "components/organisms/Showcase"
import { CONTAINER_WIDTHS, Typography } from "config"
import Anchor from "components/elements/Anchor"
import RichText from "../RichText"

const ShowcaseSlice = ({ slice }) => {
  const {
    primary: { title, description, image, flip, hash },
  } = slice
  const cases = slice.items.map(({ icon, copy }) => ({
    icon,
    copy: <RichText render={copy} />,
  }))
  return (
    <React.Fragment>
      {hash && <Anchor hash={hash} />}
      <Showcase
        copy={
          <React.Fragment>
            <RichText
              color="blue_500"
              render={title}
              mb="2rem"
              sx={{ ...Typography.H3 }}
            />
            <RichText render={description} />
          </React.Fragment>
        }
        image={image}
        cases={cases}
        caseInterval={4000}
        containerWidth={CONTAINER_WIDTHS}
        flip={flip}
        mb="10rem"
      />
    </React.Fragment>
  )
}

export default ShowcaseSlice
