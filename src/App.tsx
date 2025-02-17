import { css } from '@linaria/core'
import { styled } from '@linaria/react'
import { font } from './font'

export const globals = css`
  :global() {
    html {
      box-sizing: border-box;
    }
  }
`

function App() {
  const title = css`
    font-size: 4rem;
  `

  const subtitle = css`
    font-size: ${font.large};
  `

  type ParagraphProps = {
    fontSize?: 'small' | 'medium' | 'large'
  }
  const Paragraph = styled.p`
    font-size: ${({ fontSize = 'small' }: ParagraphProps) => font[fontSize]};
  `

  return (
    <>
      <div className="container">
        <h1 className={title}>Linaria Playground</h1>
        <h2 className={subtitle}>Sub Title</h2>
        <Paragraph fontSize="medium">Text Text Text</Paragraph>
      </div>
    </>
  )
}

export default App
