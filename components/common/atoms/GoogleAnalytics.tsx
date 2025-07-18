import Script from 'next/script'
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ID

const GoogleAnalytics = () => {
  if (!GA_TRACKING_ID) {
    console.warn('Google Analytics ID is not defined')
    return null
  }

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure',
              cookie_domain: 'lapidix.dev',
              forceSSL: true
            });
          `,
        }}
      />
    </>
  )
}

export default GoogleAnalytics
