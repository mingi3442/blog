import Image from 'next/image'
import Logo from '@/data/logo.png'
import DarkModeLogo from '@/data/logo-dark.png'

const HeaderMainIcon = () => {
  return (
    <div className="mr-3">
      <Image className="hidden dark:block" src={DarkModeLogo} alt="Logo" width={30} height={30} />
      <Image className="dark:hidden" src={Logo} alt="Logo" width={30} height={30} />
    </div>
  )
}

export default HeaderMainIcon
