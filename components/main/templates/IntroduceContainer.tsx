import GreetingTextWrapper from '../molecules/GreetingTextWrapper'
import IntroduceTextWrapper from '../molecules/IntroduceTextWrapper'
import { TypedIntroduceWrapper } from '../organisms/TypedIntroduceWrapper'

const INTERESTED_TECH_TAGS = ['cosmos-network', 'Cryptography']

const IntroduceContainer = () => {
  return (
    <div className="flex p-0 md:p-4 w-auto items-center justify-between h-auto">
      <div className="flex flex-col items-start justify-start h-auto flex-1">
        <GreetingTextWrapper />
        <IntroduceTextWrapper />
        <TypedIntroduceWrapper />

        <div className="p-2">{/* <MyInformation /> */}</div>
      </div>
    </div>
  )
}

export default IntroduceContainer
