import { Button, type ButtonProps } from '@/components/ui/button'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import React from 'react'

import type { Page, Post } from '@/payload-types'

type CMSLinkType = {
  appearance?: 'inline' | ButtonProps['variant']
  children?: React.ReactNode
  className?: string
  label?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages' | 'posts'
    value: Page | Post | string | number
  } | null
  size?: ButtonProps['size'] | null
  type?: 'custom' | 'reference' | null
  url?: string | null
}

export const CMSLink: React.FC<CMSLinkType> = (props) => {
  const {
    type,
    appearance = 'inline',
    children,
    className,
    label,
    newTab,
    reference,
    size: sizeFromProps,
    url,
  } = props

  // For nested pages, use the breadcrumb URL if available
  let href = url
  if (type === 'reference' && typeof reference?.value === 'object') {
    const doc = reference.value

    // For pages, try to use breadcrumb URL first (supports nested routing)
    if (reference.relationTo === 'pages' && 'breadcrumbs' in doc && doc.breadcrumbs) {
      const breadcrumbs = doc.breadcrumbs as Array<{ url?: string | null }>
      const breadcrumbUrl = breadcrumbs[breadcrumbs.length - 1]?.url
      href = breadcrumbUrl || `/${doc.slug}`
    }
    // For posts and pages without breadcrumbs, use slug-based URL
    else if (doc.slug) {
      href = `${reference.relationTo !== 'pages' ? `/${reference.relationTo}` : ''}/${doc.slug}`
    }
  }

  if (!href) return null

  const size = appearance === 'link' ? 'clear' : sizeFromProps
  const newTabProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {}

  /* Ensure we don't break any styles set by richText */
  if (appearance === 'inline') {
    return (
      <Link className={cn(className)} href={href || url || ''} {...newTabProps}>
        {label && label}
        {children && children}
      </Link>
    )
  }

  return (
    <Button asChild className={className} size={size} variant={appearance}>
      <Link className={cn(className)} href={href || url || ''} {...newTabProps}>
        {label && label}
        {children && children}
      </Link>
    </Button>
  )
}
