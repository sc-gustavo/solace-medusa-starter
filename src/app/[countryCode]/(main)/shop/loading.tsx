import { Container } from '@modules/common/components/container'
import SkeletonProductGrid from '@modules/skeletons/templates/skeleton-product-grid'

export default function Loading() {
  return (
    <Container className="flex flex-col gap-8 !py-8">
      <div className="flex animate-pulse flex-col gap-4">
        <div className="bg-skeleton-primary h-6 w-[150px] small:w-[200px]" />
        <div className="bg-skeleton-primary h-12 w-[300px] small:h-14 small:w-[350px]" />
        <div className="bg-skeleton-primary h-[22px] w-[100px]" />
        <div className="grid w-full grid-cols-2 items-center justify-between gap-2 small:flex">
          <div className="flex gap-2">
            <div className="bg-skeleton-primary hidden h-12 w-[130px] small:block" />
            <div className="bg-skeleton-primary h-12 w-full small:w-[90px]" />
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-skeleton-primary hidden h-6 w-[100px] small:block" />
            <div className="bg-skeleton-primary h-12 w-full small:w-[200px]" />
          </div>
        </div>
      </div>
      <SkeletonProductGrid />
    </Container>
  )
}
