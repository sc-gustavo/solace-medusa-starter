const SkeletonCodeForm = () => {
  return (
    <div className="bg-skeleton-primary flex w-full animate-pulse flex-col">
      <div className="grid grid-cols-[1fr_48px] gap-x-2 p-5">
        <div className="bg-skeleton-secondary h-12"></div>
        <div className="bg-skeleton-secondary h-12"></div>
      </div>
    </div>
  )
}

export default SkeletonCodeForm
