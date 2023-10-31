'use client'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'

const LocaleLink = ({ href, ...props }) => {
  const params = useParams()

  // locale을 href와 as에 추가합니다.
  const localeHref = `/${params.locale}${href}`
  // const localeAs = as ? `/${locale}${as}` : as
  // const localeHref = `/${href}`
  // const localeAs = as ? `/${as}` : as

  return <Link href={localeHref} {...props} />
}

export default LocaleLink
