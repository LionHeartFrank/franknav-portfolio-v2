import { CollectionSlug } from 'payload'

const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  posts: '/posts',
  pages: '',
}

type Props = {
  collection: keyof typeof collectionPrefixMap
  slug: string
  breadcrumbUrl?: string | null
}

const encodeBreadcrumbUrl = (url: string): string =>
  url
    .split('/')
    .map((segment) => {
      try {
        return encodeURIComponent(decodeURIComponent(segment))
      } catch {
        return encodeURIComponent(segment)
      }
    })
    .join('/')

export const generatePreviewPath = ({ collection, slug, breadcrumbUrl }: Props) => {
  // Allow empty strings, e.g. for the homepage
  if (slug === undefined || slug === null) {
    return null
  }

  // Encode to support slugs with special characters
  const encodedSlug = encodeURIComponent(slug)

  // Use breadcrumbUrl if provided (for nested docs), otherwise use slug
  // Encode the breadcrumbUrl path segments to handle special characters
  const path = breadcrumbUrl
    ? encodeBreadcrumbUrl(breadcrumbUrl)
    : `${collectionPrefixMap[collection]}/${encodedSlug}`

  const encodedParams = new URLSearchParams({
    slug: encodedSlug,
    collection,
    path,
    previewSecret: process.env.PREVIEW_SECRET || '',
  })

  const url = `/next/preview?${encodedParams.toString()}`

  return url
}
