import { Metadata } from 'next'

import {
  getCollectionsList,
  getCollectionsWithProducts,
} from '@lib/data/collections'
import {
  getCollectionsData,
  getExploreBlogData,
  getHeroBannerData,
} from '@lib/data/fetch'
import { getProductsList } from '@lib/data/products'
import { getRegion } from '@lib/data/regions'
import Collections from '@modules/home/components/collections'
import { ExploreBlog } from '@modules/home/components/explore-blog'
import Hero from '@modules/home/components/hero'
import { OurBestsellers } from '@modules/home/components/our-bestsellers'

export const metadata: Metadata = {
  title: 'Medusa Next.js Starter Template',
  description:
    'A performant frontend ecommerce starter template with Next.js 14 and Medusa.',
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const {
    response: { products },
  } = await getProductsList({
    pageParam: 0,
    queryParams: {
      limit: 9,
    },
    countryCode,
  })
  const region = await getRegion(countryCode)
  const { collections: collectionsList } = await getCollectionsList()

  const strapiCollections = await getCollectionsData()

  const {
    data: { HeroBanner },
  } = await getHeroBannerData()

  const { data: posts } = await getExploreBlogData()

  if (!products || !collections || !region) {
    return null
  }

  return (
    <>
      <Hero data={HeroBanner} />
      <Collections
        cmsCollections={strapiCollections}
        medusaCollections={collectionsList}
      />
      <OurBestsellers products={products} />
      <ExploreBlog posts={posts} />
    </>
  )
}
