# Proposal: Project-Wide Color System (HSL Variables)

This document outlines a proposed premium color system using HSL variables in Tailwind CSS.

## Theme: Deep Ocean / Slate with Indigo Accents

### Light Mode (:root)
- **Background**: `0 0% 100%` (Pure White) or `210 20% 98%` (Slight Off-White)
- **Foreground**: `222.2 84% 4.9%` (Deep Slate)
- **Primary**: `222.2 47.4% 11.2%` (Deep Slate/Blue)
- **Accent**: `243 75% 59%` (Indigo)
- **Success**: `142 71% 45%` (Emerald)
- **Warning**: `48 96% 53%` (Amber)
- **Error**: `347 77% 50%` (Rose)

### Dark Mode ([data-theme='dark'])
- **Background**: `222.2 84% 4.9%` (Deep Slate/Black)
- **Foreground**: `210 40% 98%` (Soft White)
- **Primary**: `210 40% 98%` (Soft White)
- **Accent**: `243 75% 75%` (Soft Indigo)
- **Success**: `142 71% 45%`
- **Warning**: `48 96% 53%`
- **Error**: `347 77% 50%`

## Goals
1. Maintain high contrast for accessibility (WCAG 2+ AAA).
2. Provide a modern, premium aesthetic.
3. Ensure seamless switching between themes.
