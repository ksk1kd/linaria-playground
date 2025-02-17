import { css } from '@linaria/core'

function App() {
  const title = css`
    font-size: 4rem;
  `

  return (
    <>
      <div className="container">
        <h1 className={title}>Linaria Playground</h1>
      </div>
    </>
  )
}

export default App
