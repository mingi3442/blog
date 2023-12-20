import Head from 'next/head'
import { useRouter } from 'next/router'
import siteMetadata from '@/data/siteMetadata'

interface Props {
  title?: string
  description?: string
  ogImage?: string
}

function SEO({ title, description, ogImage }: Props) {
  const router = useRouter()

  const TITLE = title
    ? `${title} - ${siteMetadata.author}`
    : `${siteMetadata.title} - ${siteMetadata.author}`
  const DESCRIPTION = description ? description : siteMetadata.description
  const URL = siteMetadata.siteUrl + router.asPath
  const IMAGE = ogImage ? ogImage : siteMetadata.socialBanner

  return (
    <Head>
      <title>{TITLE}</title>
      <link rel="canonical" href={URL} />
      <meta name="description" content={DESCRIPTION} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content={IMAGE} />
      <meta property="og:url" content={URL} />

      {/* for twitter */}
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={IMAGE} />
    </Head>
  )
}

export default SEO
