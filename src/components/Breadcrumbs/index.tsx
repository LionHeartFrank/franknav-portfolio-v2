import Link from 'next/link'
import React from 'react'

export type BreadcrumbData = {
  url?: string | null
  label?: string | null
  id?: string | null
}

export type BreadcrumbsProps = {
  items?: BreadcrumbData[] | null
  className?: string
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className }) => {
  if (!items || items.length === 0) return null

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap list-none p-0 m-0 text-sm overflow-hidden">
        <li className="flex items-center">
          <Link href="/" className="hover:text-primary transition-colors text-muted-foreground">
            Home
          </Link>
          <span className="mx-2 text-muted-foreground/50">/</span>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          const { url, label } = item

          if (!label) return null

          return (
            <li key={index} className="flex items-center">
              {!isLast && url ? (
                <>
                  <Link
                    href={url}
                    className="hover:text-primary transition-colors text-muted-foreground whitespace-nowrap"
                  >
                    {label}
                  </Link>
                  <span className="mx-2 text-muted-foreground/50">/</span>
                </>
              ) : (
                <span className="font-medium text-foreground whitespace-nowrap" aria-current="page">
                  {label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
