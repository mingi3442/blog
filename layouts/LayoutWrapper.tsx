import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import SectionContainer from '../components/common/atoms/SectionContainer'
import Footer from '../components/common/molecules/Footer'
import Header from '../components/header/organisms/Header'

interface Props {
  children: ReactNode
}

const inter = Inter({
  subsets: ['latin'],
})

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className={`${inter.className} flex h-screen flex-col justify-between font-sans`}>
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
