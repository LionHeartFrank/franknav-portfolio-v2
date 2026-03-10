import { GlobalConfig } from 'payload'

export const Settings: GlobalConfig = {
  slug: 'settings',
  label: 'Settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteTitle',
      type: 'text',
      localized: true,
      label: 'Site Title',
      defaultValue: 'Frank Nav Portfolio',
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
      label: 'Site Description',
      defaultValue: 'UX/UI Designer & Junior FullStack Developer',
    },
  ],
}
