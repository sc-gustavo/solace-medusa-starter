import { useEffect, useState } from 'react'

import { Button } from '@modules/common/components/button'
import { MoonIcon, SunIcon } from '@modules/common/icons'

export function ThemeSwitcher() {
  const [preferredColorTheme, SetPreferredColorTheme] = useState('light')
  const handleClick = () => {
    document.body.classList.remove(preferredColorTheme)
    const newColorTheme = preferredColorTheme === 'light' ? 'dark' : 'light'
    SetPreferredColorTheme(newColorTheme)
    document.body.classList.add(newColorTheme)
    localStorage.setItem('theme', newColorTheme)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      SetPreferredColorTheme(savedTheme)
      document.body.classList.add(savedTheme)
    } else {
      const userPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      const defaultTheme = userPrefersDark ? 'dark' : 'light'
      SetPreferredColorTheme(defaultTheme)
      document.body.classList.add(defaultTheme)
    }
  }, [])

  return (
    <Button
      variant="text"
      onClick={handleClick}
      className="w-full justify-start rounded-none p-0 hover:bg-hover"
    >
      <div className="flex items-center gap-4 p-4 text-lg">
        {preferredColorTheme === 'dark' ? (
          <>
            <SunIcon /> Switch to light mode
          </>
        ) : (
          <>
            <MoonIcon /> Switch to dark mode
          </>
        )}
      </div>
    </Button>
  )
}
