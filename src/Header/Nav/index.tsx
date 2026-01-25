'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex gap-3 items-center">
      {navItems.map((item, i) => {
        if (item.blockType === 'link') {
          return <CMSLink key={i} {...item.link} appearance="link" />
        }

        if (item.blockType === 'menuGroup') {
          return (
            <div key={i} className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium hover:text-primary">
                {item.label}
              </button>
              <div className="absolute hidden group-hover:block bg-background border rounded-md p-2 min-w-[150px] top-full left-0 shadow-lg">
                <ul className="flex flex-col gap-2">
                  {item.links?.map((linkItem, j) => (
                    <li key={j}>
                      <CMSLink {...linkItem.link} appearance="link" className="whitespace-nowrap" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        }

        return null
      })}
      <Link href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 text-primary" />
      </Link>
    </nav>
  )
}
