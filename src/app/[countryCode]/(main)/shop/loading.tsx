import { Container } from '@modules/common/components/container'
import SkeletonProductGrid from '@modules/skeletons/templates/skeleton-product-grid'

export default function Loading() {
  return (
    <Container className="flex flex-col gap-8 !py-8">
      <div className="flex animate-pulse flex-col gap-4">
        <div className="h-6 w-[150px] bg-skeleton-primary small:w-[200px]" />
        <div className="h-12 w-[300px] bg-skeleton-primary small:h-14 small:w-[350px]" />
        <div className="h-[22px] w-[100px] bg-skeleton-primary" />
        <div className="grid w-full grid-cols-2 items-center justify-between gap-2 small:flex">
          <div className="flex gap-2">
            <div className="hidden h-12 w-[130px] bg-skeleton-primary small:block" />
            <div className="h-12 w-full bg-skeleton-primary small:w-[90px]" />
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden h-6 w-[100px] bg-skeleton-primary small:block" />
            <div className="h-12 w-full bg-skeleton-primary small:w-[200px]" />
          </div>
        </div>
      </div>
      <SkeletonProductGrid />
    </Container>
  )
}
