import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Menu from './components/Menu'
import About from './components/About'
import Products from './components/Products'
import Review from './components/Review'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id='home'>
          <Home />
        </div>
        <div id='menu'>
          <Menu />
        </div>
        <div id='about'>
          <About />
        </div>
        <div className='products'>
          <Products/>
        </div>
        <div id='review'>
          <Review/>
        </div>
      </main>
      <div id='footer'>
        <Footer/>
      </div>

    </div>
  )
}

export default App