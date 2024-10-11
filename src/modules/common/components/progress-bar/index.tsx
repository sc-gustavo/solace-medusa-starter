'use client'

import { useEffect, useState } from 'react'

import { AppProgressBar } from 'next-nprogress-bar'

export function ProgressBar() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {}, [])

  return (
    <AppProgressBar
      height="3px"
      color="#090909"
      options={{ showSpinner: false }}
    />
  )
}
