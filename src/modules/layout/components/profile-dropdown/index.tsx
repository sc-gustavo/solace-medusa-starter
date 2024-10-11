'use client'

import React, { Fragment, useEffect, useState } from 'react'

import { Popover, Transition } from '@headlessui/react'
import { Box } from '@modules/common/components/box'
import { Button } from '@modules/common/components/button'
import Divider from '@modules/common/components/divider'
import LocalizedClientLink from '@modules/common/components/localized-client-link'
import {
  HeadphonesIcon,
  MoonIcon,
  SunIcon,
  UserIcon,
} from '@modules/common/icons'

const ProfileDropdown = () => {
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false)
  const [preferredColorTheme, SetPreferredColorTheme] = useState('light')

  const open = () => setCartDropdownOpen(true)
  const close = () => setCartDropdownOpen(false)

  const handleClick = () => {
    const newColorTheme = preferredColorTheme === 'light' ? 'dark' : 'light'
    SetPreferredColorTheme(newColorTheme)
    document.documentElement.setAttribute('data-theme', newColorTheme)
    localStorage.setItem('theme', newColorTheme)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      SetPreferredColorTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    } else {
      const userPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      const defaultTheme = userPrefersDark ? 'dark' : 'light'
      SetPreferredColorTheme(defaultTheme)
      document.documentElement.setAttribute('data-theme', defaultTheme)
    }
  }, [])

  return (
    <Box className="z-50 h-full" onMouseEnter={open} onMouseLeave={close}>
      <Popover className="relative h-full">
        <Popover.Button className="rounded-full bg-transparent !p-2 text-action-primary hover:bg-fg-secondary-hover hover:text-action-primary-hover active:bg-fg-secondary-pressed active:text-action-primary-pressed xsmall:!p-3.5">
          <LocalizedClientLink href="/account">
            <UserIcon />
          </LocalizedClientLink>
        </Popover.Button>
        <Transition
          show={cartDropdownOpen}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel
            static
            className="absolute right-0 top-[calc(100%+8px)] w-[264px] border border-action-primary bg-primary text-ui-fg-base"
            data-testid="nav-cart-dropdown"
          >
            <Box className="flex flex-col gap-2 p-2">
              <Button size="sm" asChild>
                <LocalizedClientLink href="/account?mode=sign-in">
                  Sign in
                </LocalizedClientLink>
              </Button>
              <Button size="sm" asChild variant="tonal">
                <LocalizedClientLink href="/account?mode=register">
                  Sign up
                </LocalizedClientLink>
              </Button>
            </Box>
            <Divider />
            <Box className="p-2">
              <Button variant="text" withIcon onClick={handleClick}>
                {preferredColorTheme === 'dark' ? (
                  <>
                    <SunIcon /> Switch to light mode
                  </>
                ) : (
                  <>
                    <MoonIcon /> Switch to dark mode
                  </>
                )}
              </Button>
              <Button variant="text" withIcon>
                <HeadphonesIcon /> Support center
              </Button>
            </Box>
          </Popover.Panel>
        </Transition>
      </Popover>
    </Box>
  )
}

export default ProfileDropdown
