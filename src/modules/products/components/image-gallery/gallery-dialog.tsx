'use client'

import { useState } from 'react'
import Image from 'next/image'

import { clx } from '@medusajs/ui'
import { Box } from '@modules/common/components/box'
import { Button } from '@modules/common/components/button'
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from '@modules/common/components/dialog'
import { Heading } from '@modules/common/components/heading'
import useEmblaCarousel from 'embla-carousel-react'

type GalleryDialogProps = {
  images: { id: string; url: string }[]
  title: string
}

export const GalleryDialog = ({ images, title }: GalleryDialogProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    !!images.length && (
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="mx-auto hidden w-fit outline-none medium:flex"
            variant="tonal"
            size="sm"
          >
            See more images
          </Button>
        </DialogTrigger>
        <DialogPortal>
          <DialogOverlay />
          <DialogContent aria-describedby={undefined}>
            <DialogTitle className="hidden">Product Gallery Modal</DialogTitle>
            <DialogHeader className="small:hidden">
              <Heading as="h3" className="text-xl text-basic-primary">
                {title}
              </Heading>
            </DialogHeader>
            <DialogBody className="mx-auto flex max-w-[1440px] flex-col items-center justify-center gap-4 p-4 small:gap-20 small:px-14 small:py-[31px] large:flex-row large:justify-normal">
              <Box className="order-2 flex gap-2 large:order-1 large:flex-col">
                {images.map((img, id) => (
                  <Box
                    key={id}
                    className={clx(
                      'h-[92px] max-w-[20] flex-1 cursor-pointer border small:w-20 small:flex-none',
                      {
                        'border-black': currentIndex === id,
                      }
                    )}
                    onClick={() => {
                      setCurrentIndex(id)
                    }}
                  >
                    <Image
                      src={img.url}
                      draggable={false}
                      quality={50}
                      width={400}
                      height={400}
                      alt={title ? `${title} - product image` : 'Product image'}
                      className="h-full w-full object-cover object-center"
                    />
                  </Box>
                ))}
              </Box>
              <Box className="relative order-1 mx-auto flex h-full max-h-[458px] w-full items-center small:max-h-[758px] small:max-w-[549px] large:order-2 large:-translate-x-20 xl:max-w-[660px] 2xl:max-h-[1137px] 2xl:max-w-[990px]">
                <Image
                  src={images[currentIndex].url}
                  alt={title ? `${title} - product image` : 'Product image'}
                  fill
                  objectFit="cover"
                  objectPosition="center"
                />
              </Box>
            </DialogBody>
            <DialogClose className="right-3 top-3 large:right-14 large:top-[31px]" />
          </DialogContent>
        </DialogPortal>
      </Dialog>
    )
  )
}

// images.length > MAX_INITIAL_IMAGES && (
//   <Button
//     className="mx-auto hidden w-fit medium:flex"
//     variant="tonal"
//     size="sm"
//     onClick={handleOpenGallery}
//   >
//     See more images
//   </Button>
// )
