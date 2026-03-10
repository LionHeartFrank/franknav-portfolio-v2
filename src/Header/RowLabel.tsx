'use client'
import { Header } from '@/payload-types'
import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

export const RowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<NonNullable<Header['navItems']>[number]>()

  const rowData = data?.data

  const label =
    rowData?.blockType === 'link'
      ? rowData?.link?.label
      : rowData?.blockType === 'menuGroup'
        ? rowData?.label
        : 'Block'

  const finalLabel = label
    ? `Nav item ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}: ${label}`
    : 'Row'

  return <div>{finalLabel}</div>
}
