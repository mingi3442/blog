import { ENGLISH_CONTENT, KOREAN_CONTENT } from '@/data/about'
import AboutContents from '../atoms/AboutContents'

const AboutContentSection = ({ lang }: { lang: 'ko' | 'en' }) => {
  return (
    <section className="p-4">
      <AboutContents contents={lang === 'ko' ? KOREAN_CONTENT : ENGLISH_CONTENT} />
    </section>
  )
}

export default AboutContentSection
