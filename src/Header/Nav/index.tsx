'use client'

import React, { useState, useRef, useEffect } from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'

type MenuGroupItem = Extract<
  NonNullable<HeaderType['navItems']>[number],
  { blockType: 'menuGroup' }
>

const MenuGroup: React.FC<{
  item: MenuGroupItem
  index: number
}> = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const hasParentLink =
    item.parentLink?.type &&
    ((item.parentLink.type === 'reference' && item.parentLink.reference) ||
      (item.parentLink.type === 'custom' && item.parentLink.url))

  const links = item.links || []

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
        setFocusedIndex(-1)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleButtonKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsOpen(!isOpen)
      if (!isOpen) {
        setFocusedIndex(0)
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false)
      setFocusedIndex(-1)
      buttonRef.current?.focus()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (!isOpen) {
        setIsOpen(true)
        setFocusedIndex(0)
      } else {
        setFocusedIndex((prev) => (prev + 1) % links.length)
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (isOpen) {
        setFocusedIndex((prev) => (prev - 1 + links.length) % links.length)
      }
    }
  }

  const handleMenuKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      setIsOpen(false)
      setFocusedIndex(-1)
      buttonRef.current?.focus()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setFocusedIndex((prev) => (prev + 1) % links.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setFocusedIndex((prev) => (prev - 1 + links.length) % links.length)
    } else if (e.key === 'Tab') {
      setIsOpen(false)
      setFocusedIndex(-1)
    }
  }

  useEffect(() => {
    if (isOpen && focusedIndex >= 0 && menuRef.current) {
      const links = menuRef.current.querySelectorAll('a')
      const link = links[focusedIndex] as HTMLElement
      link?.focus()
    }
  }, [focusedIndex, isOpen])

  if (hasParentLink) {
    return (
      <CMSLink
        {...item.parentLink}
        appearance="link"
        className="flex items-center gap-1 text-sm font-medium"
      >
        {item.label}
      </CMSLink>
    )
  }

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleButtonKeyDown}
        onFocus={() => setIsOpen(true)}
        onBlur={(e) => {
          // Only close if focus is moving outside the menu group
          if (!menuRef.current?.contains(e.relatedTarget as Node)) {
            setIsOpen(false)
            setFocusedIndex(-1)
          }
        }}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={`menu-${index}`}
      >
        {item.label}
      </button>
      {isOpen && (
        <div
          ref={menuRef}
          id={`menu-${index}`}
          className="absolute bg-background border rounded-md p-2 min-w-[150px] top-full left-0 shadow-lg z-50"
          role="menu"
          onKeyDown={handleMenuKeyDown}
        >
          <ul className="flex flex-col gap-2">
            {links.map((linkItem, j: number) => (
              <li key={j} role="none">
                <div role="menuitem" tabIndex={focusedIndex === j ? 0 : -1}>
                  <CMSLink
                    {...linkItem.link}
                    appearance="link"
                    className="whitespace-nowrap"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex gap-3 items-center">
      {navItems.map((item, i) => {
        if (item.blockType === 'link') {
          return <CMSLink key={i} {...item.link} appearance="link" />
        }

        if (item.blockType === 'menuGroup') {
          return <MenuGroup key={i} item={item} index={i} />
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
