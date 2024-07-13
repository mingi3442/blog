import DarkModeLogo from '@/data/logo-dark.png'
import Logo from '@/data/logo.png'
import Image from 'next/image'

const LogoIcon = () => {
  return (
    <div className="mr-3">
      <Image className="hidden dark:block" src={DarkModeLogo} alt="Logo" width={30} height={30} />
      <Image className="dark:hidden" src={Logo} alt="Logo" width={30} height={30} />
    </div>
  )
}

export default LogoIcon
