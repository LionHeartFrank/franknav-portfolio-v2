import { cookies } from 'next/headers'

export const getLocale = async (): Promise<string> => {
  const cookieStore = await cookies()
  const locale = cookieStore.get('NEXT_LOCALE')?.value || 'en'
  return locale
}
