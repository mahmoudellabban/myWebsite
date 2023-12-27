import React from 'react'
import Header from "./container/Header/Header"
import About from "./container/About/About"
import Skills from "./container/Skills/Skills"
import Work from "./container/Work/Work"
import Services from "./container/Services/Services"
import Footer from "./container/Footer/Footer.jsx"
const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Work />
      <Services />
      <Footer />
    </div>
  )
}

export default App