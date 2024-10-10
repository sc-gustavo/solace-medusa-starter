import { Suspense } from 'react'

import { getProductsListByCollectionId } from '@lib/data/products'
import { HttpTypes } from '@medusajs/types'
import { Box } from '@modules/common/components/box'
import { Container } from '@modules/common/components/container'
import { Heading } from '@modules/common/components/heading'
import { Text } from '@modules/common/components/text'
import SkeletonProductGrid from '@modules/skeletons/templates/skeleton-product-grid'
import RefinementList from '@modules/store/components/refinement-list'
import { SortOptions } from '@modules/store/components/refinement-list/sort-products'
import StoreBreadcrumbs from '@modules/store/templates/breadcrumbs'
import PaginatedProducts from '@modules/store/templates/paginated-products'

export default async function CollectionTemplate({
  sortBy,
  collection,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  collection: HttpTypes.StoreCollection
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || 'created_at'
  const breadcrumb = {
    name: collection.title,
  }
  const {
    response: { products },
  } = await getProductsListByCollectionId({
    collectionId: collection.id,
    countryCode,
  })

  return (
    <Container className="flex flex-col gap-8 !py-8">
      <Box className="flex flex-col gap-4">
        <StoreBreadcrumbs breadcrumb={breadcrumb} />
        <Heading as="h1" className="text-4xl text-basic-primary small:text-5xl">
          {collection.title}
        </Heading>
        <Text className="text-md text-secondary">
          {products.length} {products.length === 1 ? 'product' : 'products'}
        </Text>
        <Box className="grid w-full grid-cols-1 items-center justify-between gap-2 small:flex small:flex-wrap">
          <RefinementList sortBy={sortBy || 'created_at'} />
        </Box>
      </Box>

      <Suspense fallback={<SkeletonProductGrid />}>
        <PaginatedProducts
          sortBy={sort}
          page={pageNumber}
          collectionId={collection.id}
          countryCode={countryCode}
        />
      </Suspense>
    </Container>
  )
}
