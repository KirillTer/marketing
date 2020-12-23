import React from "react"
import { Elements } from "prismic-reactjs"
import { Heading } from "@rent_avail/typography"
import { linkResolver } from "src/prismic.config"
import { H1_SIZING, H2_SIZING, H3_SIZING } from "config"
import { useUrlResolver } from "components/partials/UrlResolver"
import { getTargetProps } from "utils/link"
import { List, ListItem, OList } from "./components/List"
import { Text } from "./components/Text"

const createHeading = (as, props, children) =>
  children && children[0] ? (
    React.createElement(Heading, { as, ...props }, children)
  ) : (
    /** This a "hack", if we return NULL as we should've the RichText will
     * fall back to default implementation and will render empty heading tag */
    <React.Fragment key={props.key} />
  )

const htmlSerializer = (props) => {
  const urlResolver = useUrlResolver()
  return (type, element, content, children, key) => {
    switch (type) {
      case Elements.heading1:
        return createHeading(
          "h1",
          {
            ...H1_SIZING,
            ...props,
            key,
          },
          children
        )
      case Elements.heading2:
        return createHeading(
          "h2",
          {
            ...H2_SIZING,
            ...props,
            key,
          },
          children
        )
      case Elements.heading3:
        return createHeading(
          "h3",
          {
            ...H3_SIZING,
            ...props,
            key,
          },
          children
        )
      case Elements.heading4:
        return createHeading("h4", { ...props, key }, children)
      case Elements.heading5:
        return createHeading("h5", { ...props, key }, children)
      case Elements.heading6:
        return createHeading("h6", { ...props, key }, children)
      case Elements.paragraph:
        return React.createElement(Text, { ...props, key }, children)
      case Elements.list:
        return React.createElement(List, { ...props, key }, children)
      case Elements.listItem:
        return React.createElement(ListItem, { ...props, key }, children)
      case Elements.oList:
        return React.createElement(OList, { ...props, key }, children)
      case Elements.hyperlink: {
        return React.createElement(
          "a",
          {
            href: urlResolver(element.data.url) || linkResolver(element.data),
            className: "link",
            ...getTargetProps(element.data.target),
            ...props,
            key,
          },
          children
        )
      }
      default:
        return null
    }
  }
}

export default htmlSerializer
