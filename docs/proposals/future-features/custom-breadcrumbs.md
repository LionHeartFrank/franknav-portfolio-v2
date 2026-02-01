Please a# Proposal: Custom Breadcrumbs

## Overview

This proposal outlines a feature to allow content editors to customize breadcrumb labels and URLs on a per-page basis, overriding the auto-generated breadcrumbs from the nested docs plugin.

## Use Cases

1. **Custom Labels**: Display a shorter or more user-friendly label in breadcrumbs than the page title
   - Example: Page title "About Our Company" → Breadcrumb "About"
2. **External Links**: Include external resources in the breadcrumb trail
3. **Virtual Hierarchies**: Show a different hierarchy in breadcrumbs than the actual parent-child structure
4. **Localization**: Override breadcrumb labels for specific locales

## Proposed Implementation

### Backend (Payload CMS)

Add a new field to the Pages collection:

```typescript
{
  name: 'customBreadcrumbs',
  type: 'array',
  label: 'Custom Breadcrumbs',
  admin: {
    position: 'sidebar',
    description: 'Override auto-generated breadcrumbs. Leave empty to use default.',
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      required: true,
    },
  ],
}
```

### Frontend

Update the `Breadcrumbs` component to:
1. Check if `customBreadcrumbs` exists and has items
2. If yes, use custom breadcrumbs
3. If no, fall back to auto-generated breadcrumbs from `nestedDocsPlugin`

### Complexity Considerations

**Medium-High Complexity** due to:
- Need to handle merging custom and auto-generated breadcrumbs
- Validation of custom URLs
- Potential conflicts with nested docs plugin
- Testing edge cases (empty arrays, partial overrides, etc.)
- Localization support for custom labels

## Alternative Approaches

1. **Simple Override**: Replace entire breadcrumb trail (simpler, less flexible)
2. **Label-Only Override**: Only customize labels, keep auto-generated URLs (simpler, safer)
3. **Template-Based**: Use a template syntax to modify auto-generated breadcrumbs

## Recommendation

This feature is **not critical for MVP** and should be implemented only if:
- User testing shows a clear need for custom breadcrumbs
- The auto-generated breadcrumbs are insufficient for common use cases
- There's time after core features are complete

## Related Features

- Breadcrumb schema markup for SEO
- Breadcrumb icons/separators customization
- Breadcrumb analytics tracking
