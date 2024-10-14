const SkeletonCartItem = () => {
  return (
    <div className="bg-skeleton-primary flex animate-pulse small:h-[172px]">
      <div className="bg-skeleton-secondary h-[92px] w-[92px] shrink-0 animate-pulse small:h-full small:w-[146px]" />
      <div className="flex w-full justify-between p-5">
        <div className="flex h-full flex-col gap-3 small:justify-between small:gap-0">
          <div>
            <div className="bg-skeleton-secondary mb-2 h-11 w-[100px] animate-pulse small:h-[22px] small:w-[200px]" />
            <div className="bg-skeleton-secondary h-[22px] w-10 animate-pulse" />
          </div>
          <div className="bg-skeleton-secondary h-12 w-24 animate-pulse" />
        </div>
        <div className="flex flex-col items-end justify-between">
          <div className="bg-skeleton-secondary h-12 w-12 animate-pulse" />
          <div className="bg-skeleton-secondary h-12 w-24 animate-pulse" />
        </div>
      </div>
    </div>
  )
}

export default SkeletonCartItem
