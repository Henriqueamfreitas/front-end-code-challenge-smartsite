import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Form } from "./Components/Form";
import { Legend } from "./Components/Legend";
import { List } from "./Components/List";

import { GlobalReset } from "./Styles/reset";
import { GlobalStyles } from "./Styles/global";

import { GymProvider } from "./Providers/GymContext/GymContext";

function App() {
  return (
    <>
      <GymProvider>
        <GlobalReset />
        <GlobalStyles />
        <Header />
        <Form />
        <Legend />
        <List />
        <Footer />
      </GymProvider>
    </>
  )
}

export default App
