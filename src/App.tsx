// import { useState } from 'react'
import { Header } from "./Components/Header"
import { Footer } from "./Components/Footer"
import { Form } from "./Components/Form"
import { Legend } from "./Components/Legend"
import { List } from "./Components/List"

import { GlobalReset } from "./styles/reset"
import { GlobalStyles } from "./styles/global"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <GlobalReset />
      <GlobalStyles />
      <Header />
      <Form />
      <Legend />
      <List />
      <Footer />
    </>
  )
}

export default App
