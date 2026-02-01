import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import { homeStatic } from '@/endpoints/seed/home-static'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      breadcrumbs: true,
      slug: true,
    },
  })

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map((doc) => {
      const breadcrumbs = doc.breadcrumbs || []
      const lastBreadcrumb = breadcrumbs[breadcrumbs.length - 1]
      const segments =
        lastBreadcrumb?.url?.split('/').filter(Boolean) || (doc.slug ? [doc.slug] : [])

      // Ensure we don't return an empty array or [undefined]
      if (segments.length === 0) return null

      return { slug: segments }
    })
    .filter(Boolean)

  return params
}

type Args = {
  params: Promise<{
    slug?: string[]
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug } = await paramsPromise

  // Handle root path / by checking if slug is undefined or empty
  const isHomePage = !slug || slug.length === 0 || (slug.length === 1 && slug[0] === 'home')
  const url = isHomePage ? '/' : '/' + slug.join('/')

  let page: RequiredDataFromCollectionSlug<'pages'> | null

  page = await queryPageByPath({
    path: url,
  })

  // Fallback for home page if not found in DB (initial setup)
  if (!page && isHomePage) {
    page = homeStatic
  }

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const { breadcrumbs, hero, layout, hideBreadcrumbs } = page

  return (
    <article className="pt-16 pb-24">
      <PageClient />
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      {!hideBreadcrumbs && breadcrumbs && breadcrumbs.length > 0 && (
        <div className="container mb-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      )}

      <RenderHero {...hero} />
      <RenderBlocks blocks={layout} />
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = ['home'] } = await paramsPromise
  const url = '/' + (Array.isArray(slug) ? slug.join('/') : slug)
  const page = await queryPageByPath({
    path: url,
  })

  return generateMeta({ doc: page })
}

const queryPageByPath = cache(async ({ path }: { path: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  // For nested documents, we need to match the EXACT path.
  // Querying on breadcrumbs.url matches if ANY breadcrumb contains the url.
  // So we fetch all potential matches and find the one where the LAST breadcrumb matches.
  // We use a higher limit to ensure we don't miss the exact match in deep hierarchies.
  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 100,
    pagination: false,
    overrideAccess: draft,
    where: {
      'breadcrumbs.url': {
        equals: path,
      },
    },
  })

  // Find the doc where the last breadcrumb is the path we want
  const page = result.docs?.find((doc) => {
    const breadcrumbs = doc.breadcrumbs as Array<{ url?: string | null }> | undefined
    return breadcrumbs?.[breadcrumbs.length - 1]?.url === path
  })

  return page || null
})
