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
      const segments = doc.breadcrumbs?.slice(-1)[0]?.url?.split('/').filter(Boolean) || [doc.slug]
      return { slug: segments }
    })

  return params
}

type Args = {
  params: Promise<{
    slug?: string[]
  }>
}

import { Breadcrumbs } from '@/components/Breadcrumbs'

export default async function Page({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = ['home'] } = await paramsPromise
  const url = '/' + (Array.isArray(slug) ? slug.join('/') : slug)

  let page: RequiredDataFromCollectionSlug<'pages'> | null

  page = await queryPageByPath({
    path: url,
  })

  // Remove this code once your website is seeded
  if (!page && slug && (slug[0] === 'home' || slug.length === 0)) {
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
  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 10, // Fetch a few to be safe, though usually 1 or 2
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
