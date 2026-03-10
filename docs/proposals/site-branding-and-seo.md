# Proposal: Site Branding & SEO Integration

## Overview

This proposal outlines the integration of the `Settings` global into site-wide branding and SEO metadata. Currently, the site uses hardcoded values for the logo, footer text, and SEO meta titles. This feature will centralize these values in the `Settings` global, allowing for easy updates from the Admin UI.

## Goals

1. Replace hardcoded "Payload Website Template" references with dynamic values from `Settings` global
2. Integrate site title and description into Logo, Header, and Footer components
3. Connect SEO plugin to use `Settings` global for default meta titles and descriptions
4. Ensure all branding elements respect localization settings

## Proposed Changes

### Components

#### Logo Component
- Update `src/components/Logo/Logo.tsx` to accept `siteTitle` as a prop
- Use `siteTitle` for the `alt` attribute
- Consider adding support for custom logo upload in `Settings` global

#### Header Component
- Fetch `Settings` global in `src/Header/Component.tsx`
- Pass `siteTitle` to Logo component
- Display site description in header if needed

#### Footer Component
- Fetch `Settings` global in `src/Footer/Component.tsx`
- Display `siteTitle` and `description` in footer layout
- Replace hardcoded text with dynamic values

### SEO Integration

#### SEO Plugin Configuration
- Update `src/plugins/index.ts` to fetch `Settings` global
- Modify `generateTitle` function to use `Settings.siteTitle` instead of "Payload Website Template"
- Modify `generateURL` function if needed for SEO purposes

#### Settings Global Enhancement
- Add optional `defaultMetaDescription` field for fallback SEO descriptions
- Add optional `logo` upload field for custom branding

### Localization

- Ensure all `Settings` fields are properly localized
- Test that switching languages updates branding elements correctly

## Benefits

- **Single Source of Truth**: Update site branding in one place (Admin UI)
- **Localization Ready**: Site title and description can be translated
- **SEO Improvement**: Proper meta titles and descriptions for better search rankings
- **Professional Branding**: Remove template placeholders with actual site identity

## Implementation Phases

### Phase 1: Component Integration
- Update Logo, Header, and Footer to use `Settings` global
- Test rendering and localization

### Phase 2: SEO Plugin Integration
- Connect SEO plugin to `Settings` global
- Update default meta generation logic

### Phase 3: Testing & Verification
- Verify all pages show correct branding
- Test localization switching
- Run SEO audit to confirm meta tags are correct

## Related Files

- `src/globals/Settings.ts` - Settings global configuration
- `src/components/Logo/Logo.tsx` - Logo component
- `src/Header/Component.tsx` - Header component
- `src/Footer/Component.tsx` - Footer component
- `src/plugins/index.ts` - SEO plugin configuration
