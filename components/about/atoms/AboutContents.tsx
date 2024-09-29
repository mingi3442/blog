import React from 'react'

const AboutContents = ({ contents }: { contents: string[] }) => {
  return (
    <>
      {contents.flatMap((content, index) => [
        <React.Fragment key={`content-${index}`}>{content}</React.Fragment>,
        index < contents.length - 1 ? <br key={`br-${index}`} /> : null,
      ])}
    </>
  )
}

export default AboutContents
