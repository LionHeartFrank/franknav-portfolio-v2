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

export const generatePreviewPath = ({ collection, slug, breadcrumbUrl }: Props) => {
  // Allow empty strings, e.g. for the homepage
  if (slug === undefined || slug === null) {
    return null
  }

  // Encode to support slugs with special characters
  const encodedSlug = encodeURIComponent(slug)

  // Use breadcrumbUrl if provided (for nested docs), otherwise use slug
  // Use encodeURI (not encodeURIComponent) so that path separators (/) are preserved
  const path = breadcrumbUrl ? encodeURI(breadcrumbUrl) : `${collectionPrefixMap[collection]}/${encodedSlug}`

  const encodedParams = new URLSearchParams({
    slug: encodedSlug,
    collection,
    path,
    previewSecret: process.env.PREVIEW_SECRET || '',
  })

  const url = `/next/preview?${encodedParams.toString()}`

  return url
}
