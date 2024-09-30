import { createFooterNavigation } from '@lib/constants'
import { getCategoriesList } from '@lib/data/categories'
import { cn } from '@lib/util/cn'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@modules/common/components/accordion'
import { Box } from '@modules/common/components/box'
import { Container } from '@modules/common/components/container'
import { Divider } from '@modules/common/components/divider'
import { Heading } from '@modules/common/components/heading'
import LocalizedClientLink from '@modules/common/components/localized-client-link'
import { NavigationItem } from '@modules/common/components/navigation-item'
import { Text } from '@modules/common/components/text'
import { ChevronDownIcon } from '@modules/common/icons/chevron-down'
import { FacebookIcon } from '@modules/common/icons/facebook'
import { LinkedinIcon } from '@modules/common/icons/linkedin'
import { SolaceLogo } from '@modules/common/icons/solace-logo'
import { XIcon } from '@modules/common/icons/twitter'

function SocialMedia({ className }: { className?: string }) {
  return (
    <Box className={cn('flex gap-2', className)}>
      <div className="text-static flex h-12 w-12 cursor-pointer items-center justify-center rounded-full">
        <LocalizedClientLink href="#">
          <LinkedinIcon />
        </LocalizedClientLink>
      </div>
      <div className="text-static flex h-12 w-12 cursor-pointer items-center justify-center rounded-full">
        <LocalizedClientLink href="#">
          <FacebookIcon />
        </LocalizedClientLink>
      </div>
      <div className="text-static flex h-12 w-12 cursor-pointer items-center justify-center rounded-full">
        <LocalizedClientLink href="#">
          <XIcon />
        </LocalizedClientLink>
      </div>
    </Box>
  )
}

export default async function Footer({ countryCode }: { countryCode: string }) {
  const { product_categories } = await getCategoriesList()
  const footerNavigation = createFooterNavigation(product_categories)

  return (
    <Container
      as="footer"
      className="bg-static mx-0 max-w-full px-0 py-0 small:px-0 small:py-0"
    >
      <Container className="text-static flex flex-col gap-6 small:gap-12">
        <Box className="flex flex-col gap-8 small:gap-12 xl:gap-0 large:flex-row">
          <Box className="flex flex-col justify-between xl:min-w-[437px]">
            <LocalizedClientLink
              href="#"
              className="text-static w-max cursor-pointer"
            >
              <SolaceLogo />
            </LocalizedClientLink>
            <SocialMedia className="hidden large:flex" />
          </Box>
          <Box className="hidden shrink grow gap-5 small:flex xl:gap-0">
            {footerNavigation.navigation.map((item, id) => {
              return (
                <Box
                  key={`footerSection-${id}`}
                  className="hidden flex-1 flex-col gap-3 small:flex"
                >
                  <Heading className="mb-2 text-lg" as="h3">
                    {item.header}
                  </Heading>
                  {item.links.map((link, linkId) => {
                    return (
                      <NavigationItem
                        href={`/${countryCode}${link.href}`}
                        key={`${id}-navigationItem-${linkId}`}
                        variant="secondary"
                        className="hover:text-static w-max"
                      >
                        {link.title}
                      </NavigationItem>
                    )
                  })}
                </Box>
              )
            })}
          </Box>
          <Accordion
            type="single"
            collapsible
            className="flex w-full flex-col gap-6 small:hidden"
          >
            {footerNavigation.navigation.map((item, id) => {
              return (
                <AccordionItem
                  value={`item-${id}`}
                  key={id}
                  className="border-none"
                >
                  <AccordionTrigger className="transition-all [&[data-state=open]>#chevronDownSvg]:rotate-180">
                    <Heading
                      className="text-static text-md font-medium small:text-lg"
                      as="h3"
                    >
                      {item.header}
                    </Heading>
                    <div
                      id="chevronDownSvg"
                      className="text-static flex h-12 w-12 shrink-0 items-center justify-center duration-200 ease-in-out"
                    >
                      <ChevronDownIcon />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-3">
                    {item.links.map((link, linkId) => {
                      return (
                        <NavigationItem
                          href={link.href}
                          key={`${id}-navigationItem-${linkId}`}
                          variant="secondary"
                          className="hover:text-static"
                        >
                          {link.title}
                        </NavigationItem>
                      )
                    })}
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
          <SocialMedia className="flex large:hidden" />
        </Box>
        <Divider alignment="horizontal" variant="secondary" />
        <Box className="flex flex-wrap gap-6 gap-y-1">
          <Text size="md" className="text-secondary shrink-0">
            © {new Date().getFullYear()} Solace. All rights reserved.
          </Text>
          {footerNavigation.other.map((link, id) => (
            <NavigationItem
              key={`other-${id}`}
              variant="secondary"
              className="hover:text-static shrink-0"
              href={link.href}
            >
              {link.title}
            </NavigationItem>
          ))}
        </Box>
      </Container>
    </Container>
  )
}
