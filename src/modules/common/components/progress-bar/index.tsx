'use client'

import { AppProgressBar } from 'next-nprogress-bar'

export function ProgressBar() {
  return (
    <AppProgressBar
      height="3px"
      color="#090909"
      options={{ showSpinner: false }}
    />
  )
}
