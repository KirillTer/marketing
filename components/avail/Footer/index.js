import React from "react"
import { Box, Flex, Grid, Col, Stack, Container } from "@rent_avail/layout"
import {
  ChevronUp,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "react-feather"
import { Heading, Text } from "@rent_avail/typography"
import styled from "styled-components"

const FooterLinks = styled(Box)`
  margin-top: 3rem;
`

const FooterLinksHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.blue_500};
  text-transform: uppercase;
  font-size: 1.334rem;
  margin-bottom: 0.75rem;
`

const FooterText = styled(Text)`
  color: ${({ theme }) => theme.colors.blue_500};
  display: block;
  font-size: 1.334rem;
  margin-top: 0.6667rem;
`

const FooterIcon = styled(Box).attrs({ as: "a" })`
  display: inline-block;
  margin: 2rem 0 0;
  &:first-child {
    margin: 0;
  }
  &,
  &:hover,
  &:visited {
    color: ${({ theme }) => theme.colors.blue_500};
  }
`

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <Box bg="blue_100">
      <Container maxWidth="96rem" p="2rem 2rem 3rem">
        <Flex justifyContent="center">
          <Flex
            as="a"
            href="#top"
            color="blue_500"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo(0, 0)
            }}
          >
            To Top
            <ChevronUp style={{ marginLeft: ".5rem" }} />
          </Flex>
        </Flex>
        <Grid gap="3rem" justifyContent="space-between">
          <Col span={[12, 4, 3]}>
            <FooterLinks>
              <FooterLinksHeading as="h5">Get Started</FooterLinksHeading>
              <FooterText as="a" href="https://www.avail.co/users/new">
                Sign up as a landlord
              </FooterText>
              <FooterText
                as="a"
                href="https://www.avail.co/users/new?tenant=true"
              >
                Sign up as a tenant
              </FooterText>
            </FooterLinks>
            <FooterLinks>
              <FooterLinksHeading as="h5">About Us</FooterLinksHeading>
              <FooterText as="a" href="https://www.avail.co/about">
                Company
              </FooterText>
              <FooterText as="a" href="https://www.avail.co/house-rules">
                House Rules
              </FooterText>
              <FooterText as="a" href="https://www.avail.co/testimonials">
                Testimonials
              </FooterText>
              <FooterText as="a" href="https://www.avail.co/jobs">
                Jobs
              </FooterText>
              <FooterText as="a" href="https://www.avail.co/press">
                Press
              </FooterText>
            </FooterLinks>
          </Col>
          <Col span={[12, 4, 3]}>
            <FooterLinks>
              <FooterLinksHeading as="h5">How It Works</FooterLinksHeading>
              <FooterText
                as="a"
                href="https://www.avail.co/landlords/rental-listings"
              >
                Rental Listings
              </FooterText>
              <FooterText
                as="a"
                href="https://www.avail.co/landlords/online-rental-applications"
              >
                Rental Applications
              </FooterText>
              <FooterText
                as="a"
                href="https://www.avail.co/landlords/online-tenant-screening"
              >
                Tenant Screening
              </FooterText>
              <FooterText
                as="a"
                href="https://www.avail.co/landlords/credit-and-background-check"
              >
                Credit, Criminal, Eviction Reports
              </FooterText>
              <FooterText
                as="a"
                href="https://www.avail.co/landlords/rental-lease-agreement"
              >
                Digital Leasing
              </FooterText>
              <FooterText
                as="a"
                href="https://www.avail.co/landlords/online-rent-collection"
              >
                Online Rent Payments
              </FooterText>
              <FooterText
                as="a"
                href="https://www.avail.co/landlords/maintenance-tracking"
              >
                Maintenance Tracking
              </FooterText>
              <FooterText
                as="a"
                href="https://www.avail.co/landlords/rent-analysis"
              >
                Rent Price Analysis
              </FooterText>
            </FooterLinks>
          </Col>
          <Col span={[12, 4, 3]} alignSelf="flex-end">
            <Flex flexDirection="column" alignItems="flex-end">
              <Box>
                <FooterLinks>
                  <FooterLinksHeading as="h5">Resources</FooterLinksHeading>
                  <FooterText as="a" href="https://www.avail.co/education">
                    Landlord Education
                  </FooterText>
                  <FooterText as="a" href="https://community.avail.co">
                    Avail Community
                  </FooterText>
                  <FooterText as="a" href="https://www.avail.co/blog">
                    Avail Blog
                  </FooterText>
                  <FooterText as="a" href="https://support.avail.co">
                    Help Center
                  </FooterText>
                  <FooterText as="a" href="https://www.avail.co/contact">
                    Contact Us
                  </FooterText>
                  <FooterText as="a" href="https://www.avail.co/sitemap">
                    Site Map
                  </FooterText>
                </FooterLinks>
                <FooterLinks>
                  <FooterLinksHeading as="h5">Avail</FooterLinksHeading>
                  <FooterText as="div">
                    <address style={{ fontStyle: "normal" }}>
                      Suite #404 <br />
                      900 N Franklin St. <br />
                      Chicago, IL 60610
                    </address>
                  </FooterText>
                  <FooterText>(312) 292-9347</FooterText>
                </FooterLinks>
              </Box>
            </Flex>
          </Col>
          <Col span={[12, 4, 3]} order={[1, -1]}>
            <Flex>
              <Stack
                direction={["row", "column"]}
                alignItems="center"
                mt="2rem"
                color="blue_500"
              >
                <FooterIcon mt="0" href="https://www.avail.co/">
                  <Box
                    as="img"
                    src="/logo-glyph.svg"
                    width="4rem"
                    height="4rem"
                  />
                </FooterIcon>
                <FooterIcon
                  href="https://www.facebook.com/helloavail"
                  target="_blank"
                >
                  <Facebook />
                </FooterIcon>
                <FooterIcon
                  href="https://www.twitter.com/helloavail"
                  target="_blank"
                >
                  <Twitter />
                </FooterIcon>
                <FooterIcon
                  href="https://www.linkedin.com/company/helloavail"
                  target="_blank"
                >
                  <Linkedin />
                </FooterIcon>
                <FooterIcon
                  href="https://www.instagram.com/helloavail"
                  target="_blank"
                >
                  <Instagram />
                </FooterIcon>
                <FooterIcon
                  href="https://www.youtube.com/channel/UC4DQLbxKjV2r9xhMtLIDAqQ"
                  target="_blank"
                >
                  <Youtube />
                </FooterIcon>
              </Stack>
            </Flex>
          </Col>
        </Grid>
      </Container>
      <Box bg="blue_500" color="blue_300">
        <Box
          as={Container}
          maxWidth="96rem"
          p="2.667rem 2rem"
          fontSize="1.334rem"
        >
          <Flex mb="1rem">
            <Text color="blue_100" as="a" href="https://www.avail.co/sitemap">
              Privacy
            </Text>
            <Text mx=".5rem">|</Text>
            <Text color="blue_100" as="a" href="https://www.avail.co/sitemap">
              Terms
            </Text>
          </Flex>
          <Box>© 2011—{currentYear} Avail, All Rights Reserved.</Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer