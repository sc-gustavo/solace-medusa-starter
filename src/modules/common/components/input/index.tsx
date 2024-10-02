'use client'

import { forwardRef, InputHTMLAttributes, useRef } from 'react'

import { cn } from '@lib/util/cn'
import { mergeRefs } from '@lib/util/merge-refs'
import { SearchIcon } from '@modules/common/icons'

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, forwardedRef) => {
  const localRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    localRef.current?.focus()
  }

  return (
    <div
      className={cn(
        'border-primary focus-within:ring-action-primary [.dark_&]:focus-within:ring-action-primary focus-within:ring-offset-action-primary [.dark_&]:focus-within:ring-offset-action-primary flex h-12 w-full items-center border bg-secondary px-4 py-3.5 outline-none file:border-0 file:bg-transparent file:pt-1 file:text-md file:font-medium focus-within:border focus-within:border-action-primary focus-within:ring-0 focus-within:ring-offset-0 [.dark_&:focus-within]:border-action-primary [.dark_&]:border-transparent [.dark_&]:bg-fg-tertiary',
        {
          'cursor-not-allowed border-transparent bg-disabled text-disabled':
            props.disabled,
        },
        props.className
      )}
      onClick={handleClick}
    >
      {props.type === 'search' && <SearchIcon className="mr-2 h-5 w-5" />}
      <input
        ref={mergeRefs(localRef, forwardedRef)}
        {...props}
        className="w-full bg-transparent text-md outline-none placeholder:text-secondary focus-visible:ring-0 focus-visible:ring-offset-0 [.dark_&]:placeholder:text-static"
      />
    </div>
  )
})

Input.displayName = 'Input'
