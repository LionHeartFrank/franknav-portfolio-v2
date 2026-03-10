# Proposal: Settings Global Expansion & Improvements

## Overview
Currently, the `Settings` global has been flattened to a single-level field structure to ensure stability in the Admin UI and resolve a technical conflict with top-level tabs when only one tab exists. This document outlines how to expand this global in the future and recommendations for useful settings.

## Technical Recommendation: Re-introducing Tabs
If a `TypeError` occurs when re-introducing tabs (often due to plugins like SEO or Custom Link logic expecting a named field at the root), use one of the following strategies:

1. **Dummy Field Strategy**: Add a simple, non-tab field at the very top of the fields array (e.g., a "Site Status" select or "Maintenance Mode" checkbox). This gives the plugin logic a "named" property to find before it hits the unnamed tabs.
2. **Named Tabs**: Instead of unnamed tabs, use a named `group` or `array` for specific settings categories if the plugin conflict persists.

## Recommended Settings Tabs

### 1. General (Current)
- `siteTitle`: The SEO title for the homepage.
- `description`: Site-wide meta description.
- `logo`: Reference to Media collection.
- `favicon`: Reference to Media collection.

### 2. Social Media
- `links`: An array of objects containing:
  - `platform`: Select field (Instagram, LinkedIn, GitHub, etc.)
  - `url`: Text field for the profile link.
- `openGraphImage`: Default image used when sharing the site on social media.

### 3. Integration Keys (Technical)
- `googleAnalyticsId`: For tracking site visits.
- `formspreeId` or `emailjsServiceId`: If using external form handlers.
- `newsletterLink`: Link to Mailchimp/Substack signup.

### 4. Branding & Aesthetics
- `primaryColor`: Color picker for site-wide branding.
- `accentColor`: Color picker for highlights.
- `typography`: Choice of font families (e.g., Serif vs Sans).

### 5. SEO & Legal
- `keywords`: Global meta keywords.
- `copyrightText`: Text displayed in the footer.
- `termsUrl`: Link to Terms and Conditions.
- `privacyPolicyUrl`: Link to Privacy Policy.

## Roadmap Integration
This expansion is scheduled for **Phase 7: Future Features and Improvements**.
