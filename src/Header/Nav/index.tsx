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
  const triggerRef = useRef<HTMLElement>(null)
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
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
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
      if (e.key === ' ' || !hasParentLink) {
        e.preventDefault()
        setIsOpen(!isOpen)
        if (!isOpen) {
          setFocusedIndex(0)
        }
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false)
      setFocusedIndex(-1)
      triggerRef.current?.focus()
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
      triggerRef.current?.focus()
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
      const linkElements = menuRef.current.querySelectorAll('a')
      const link = linkElements[focusedIndex] as HTMLElement
      link?.focus()
    }
  }, [focusedIndex, isOpen])

  const hasLinks = links.length > 0

  return (
    <div
      className="relative"
      onMouseEnter={() => hasLinks && setIsOpen(true)}
      onMouseLeave={() => {
        setIsOpen(false)
        setFocusedIndex(-1)
      }}
    >
      {hasParentLink ? (
        <CMSLink
          {...item.parentLink}
          ref={triggerRef as React.RefObject<HTMLAnchorElement>}
          appearance="link"
          className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary"
          onKeyDown={hasLinks ? handleButtonKeyDown : undefined}
          onMouseEnter={hasLinks ? () => setIsOpen(true) : undefined}
          onBlur={
            hasLinks
              ? (e) => {
                  // Only close if focus is moving outside the menu group
                  if (!menuRef.current?.contains(e.relatedTarget as Node)) {
                    setIsOpen(false)
                    setFocusedIndex(-1)
                  }
                }
              : undefined
          }
          aria-expanded={hasLinks ? isOpen : undefined}
          aria-haspopup={hasLinks ? 'true' : undefined}
          aria-controls={hasLinks ? `menu-${index}` : undefined}
        >
          {item.label}
        </CMSLink>
      ) : (
        <button
          ref={triggerRef as React.RefObject<HTMLButtonElement>}
          className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary"
          onClick={() => hasLinks && setIsOpen(!isOpen)}
          onMouseEnter={hasLinks ? () => setIsOpen(true) : undefined}
          onKeyDown={hasLinks ? handleButtonKeyDown : undefined}
          onBlur={
            hasLinks
              ? (e) => {
                  // Only close if focus is moving outside the menu group
                  if (!menuRef.current?.contains(e.relatedTarget as Node)) {
                    setIsOpen(false)
                    setFocusedIndex(-1)
                  }
                }
              : undefined
          }
          aria-expanded={hasLinks ? isOpen : undefined}
          aria-haspopup={hasLinks ? 'true' : undefined}
          aria-controls={hasLinks ? `menu-${index}` : undefined}
        >
          {item.label}
        </button>
      )}
      {hasLinks && isOpen && (
        <div
          ref={menuRef}
          id={`menu-${index}`}
          className="absolute bg-background border rounded-md p-2 min-w-[150px] top-full left-0 shadow-lg z-50"
          role="menu"
          onKeyDown={handleMenuKeyDown}
        >
          <ul className="flex flex-col gap-2">
            {links.map((linkItem, j) => (
              <li key={j} role="none">
                <CMSLink
                  {...linkItem.link}
                  appearance="inline"
                  className="whitespace-nowrap text-sm font-medium hover:underline block"
                  onClick={() => {
                    setIsOpen(false)
                    setFocusedIndex(-1)
                  }}
                  role="menuitem"
                  tabIndex={focusedIndex === j ? 0 : -1}
                />
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
