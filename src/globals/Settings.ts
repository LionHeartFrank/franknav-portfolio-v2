import { GlobalConfig } from 'payload'

export const Settings: GlobalConfig = {
  slug: 'settings',
  label: 'Settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General',
          fields: [
            {
              name: 'siteTitle',
              type: 'text',
              label: 'Site Title',
              defaultValue: 'Frank Nav Portfolio',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Site Description',
              defaultValue: 'UX/UI Designer & Junior FullStack Developer',
            },
          ],
        },
        {
          label: 'Navigation',
          fields: [
            {
              name: 'navItems',
              type: 'array',
              label: 'Navigation Items',
              minRows: 1,
              maxRows: 5,
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  label: 'Label',
                  required: true,
                },
                {
                  name: 'link',
                  type: 'text',
                  label: 'Link (Slug)',
                  defaultValue: '/',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
