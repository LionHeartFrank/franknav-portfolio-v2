import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'blocks',
      blocks: [
        {
          slug: 'link',
          fields: [
            link({
              appearances: false,
            }),
          ],
        },
        {
          slug: 'menuGroup',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            link({
              overrides: {
                name: 'parentLink',
                label: 'Parent Link (Optional)',
                admin: {
                  description:
                    'Optional link for the parent label. If not set, the label will not be clickable.',
                },
              },
              appearances: false,
              disableLabel: true,
            }),
            {
              name: 'links',
              type: 'array',
              fields: [
                link({
                  appearances: false,
                }),
              ],
            },
          ],
        },
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
