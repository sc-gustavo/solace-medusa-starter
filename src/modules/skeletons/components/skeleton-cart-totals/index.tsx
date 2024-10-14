const SkeletonCartTotals = ({ header = true }) => {
  return (
    <div className="flex flex-col">
      {header && <div className="bg-skeleton-secondary mb-4 h-4 w-32"></div>}
      <div className="flex items-center justify-between">
        <div className="bg-skeleton-secondary h-3 w-32"></div>
        <div className="bg-skeleton-secondary h-3 w-32"></div>
      </div>

      <div className="my-4 flex items-center justify-between">
        <div className="bg-skeleton-secondary h-3 w-24"></div>
        <div className="bg-skeleton-secondary h-3 w-24"></div>
      </div>

      <div className="flex items-center justify-between">
        <div className="bg-skeleton-secondary h-3 w-28"></div>
        <div className="bg-skeleton-secondary h-3 w-20"></div>
      </div>

      <div className="bg-skeleton-secondary my-4 w-full border-b border-dashed"></div>

      <div className="flex items-center justify-between">
        <div className="bg-skeleton-secondary mb-4 h-6 w-32"></div>
        <div className="bg-skeleton-secondary mb-4 h-6 w-24"></div>
      </div>
    </div>
  )
}

export default SkeletonCartTotals
