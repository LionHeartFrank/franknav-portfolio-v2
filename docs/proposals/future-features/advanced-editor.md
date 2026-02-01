# Proposal: Advanced Lexical Editor Configuration

## Overview
The current default editor is a minimal "WYSIWYG" (What You See Is What You Get) configuration. To support professional portfolio content, especially technical case studies and dev projects, we need a robust editor that handles deep formatting, code, and markdown.

## Proposed Features

### 1. Structure & Formatting
- **Headings**: Enable H1 through H4 for proper document hierarchy.
- **Lists**: Support for Ordered (numbered) and Unordered (bulleted) lists.
- **Horizontal Rules**: For clear section separation.
- **Blockquotes**: For highlighting testimonials or key quotes.

### 2. Technical Content
- **Code Blocks**: Syntax-highlighted code blocks for developers.
- **Inline Code**: For mentioning variables or file names in-line.

### 3. Media Integration
- **Inline Media**: Allow placing images from the `Media` collection directly into the text flow.

### 4. Markdown Support
- **Markdown Shortcuts**: Enable real-time markdown shortcuts (e.g., typing `## ` automatically creates a Heading 2).
- **Import/Paste**: Configure the editor to handle markdown paste events, converting markdown syntax into Lexical nodes automatically.

## Technical Implementation
Update `src/fields/defaultLexical.ts` to include the following features from `@payloadcms/richtext-lexical`:
- `HeadingFeature`
- `ListFeature`
- `CodeFeature`
- `UploadFeature`
- `MarkdownShortcutFeature`
- `BlockquoteFeature`

## Roadmap Integration
This feature is critical for high-quality content and should be completed in **Phase 4: Development & Features**, specifically before Phase 5 (Content Migration).
