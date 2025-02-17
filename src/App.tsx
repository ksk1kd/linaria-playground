import { css } from '@linaria/core'
import { font } from './font'

function App() {
  const title = css`
    font-size: 4rem;
  `

  const subtitle = css`
    font-size: ${font.large};
  `

  return (
    <>
      <div className="container">
        <h1 className={title}>Linaria Playground</h1>
        <h2 className={subtitle}>Sub Title</h2>
      </div>
    </>
  )
}

export default App
