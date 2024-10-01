export interface StrapiPhotoArray {
  data: StrapiPhotoAttributes[]
}

export interface StrapiPhotoAttributes {
  id: number
  name: string
  size: number
  width: number
  height: number
  url: string
  alternativeText: string
}

export interface StrapiData<T> {
  data: T
}

export type HeroBanner = {
  Headline: string
  Text: string
  CTA: {
    id: number
    BtnText: string
    BtnLink: string
  }
  Image: {
    url: string
    alternativeText?: string
  }
}

export type HeroBannerData = {
  data: {
    HeroBanner: HeroBanner
  }
}

export type Collection = {
  id: number
  documentId: string
  Title: string
  Handle: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  Image: StrapiPhotoAttributes
  locale: string
  Description: string
}

export type CollectionsData = {
  data: Collection[]
}
