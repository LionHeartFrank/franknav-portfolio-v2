import { describe, it, expect } from 'vitest'
import { generatePreviewPath } from '@/utilities/generatePreviewPath'

describe('generatePreviewPath', () => {
  it('returns null when slug is null', () => {
    // @ts-expect-error testing runtime behavior with null input
    expect(generatePreviewPath({ collection: 'posts', slug: null })).toBeNull()
  })

  it('returns null when slug is undefined', () => {
    // @ts-expect-error testing runtime behavior with undefined input
    expect(generatePreviewPath({ collection: 'posts', slug: undefined })).toBeNull()
  })

  it('generates path using slug when no breadcrumbUrl is provided', () => {
    const result = generatePreviewPath({ collection: 'posts', slug: 'my-post' })
    expect(result).toContain('path=%2Fposts%2Fmy-post')
    expect(result).toContain('slug=my-post')
  })

  it('uses breadcrumbUrl when provided', () => {
    const result = generatePreviewPath({
      collection: 'pages',
      slug: 'child',
      breadcrumbUrl: '/parent/child',
    })
    expect(result).toContain('path=%2Fparent%2Fchild')
  })

  it('encodes special characters in breadcrumbUrl path segments', () => {
    const result = generatePreviewPath({
      collection: 'pages',
      slug: 'some-page',
      breadcrumbUrl: '/section/my page & more',
    })
    expect(result).not.toContain('my page & more')
    expect(result).toContain('my%20page%20%26%20more')
  })

  it('encodes query-unsafe characters in breadcrumbUrl', () => {
    const result = generatePreviewPath({
      collection: 'pages',
      slug: 'some-page',
      breadcrumbUrl: '/path/with?query=value',
    })
    expect(result).not.toContain('?query=value')
    expect(result).toContain('with%3Fquery%3Dvalue')
  })

  it('does not double-encode already-encoded breadcrumbUrl segments', () => {
    const result = generatePreviewPath({
      collection: 'pages',
      slug: 'some-page',
      breadcrumbUrl: '/path/already%20encoded',
    })
    // Should not become %2520 (double-encoded space)
    expect(result).not.toContain('%2520')
    expect(result).toContain('already%20encoded')
  })

  it('handles null breadcrumbUrl by falling back to slug-based path', () => {
    const result = generatePreviewPath({
      collection: 'pages',
      slug: 'home',
      breadcrumbUrl: null,
    })
    expect(result).toContain('path=%2Fhome')
    expect(result).toContain('slug=home')
  })

  it('encodes special characters in slug', () => {
    const result = generatePreviewPath({ collection: 'posts', slug: 'my post' })
    expect(result).toContain('slug=my%20post')
  })
})
