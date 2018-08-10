import React, { Component } from 'react'
import './assets/styles/App.scss'

import Header from './components/Header'
import Login from './components/Login'
import Products from './components/Products'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

        <main role="main">
          <div className="container">
            <Login />
            <Products products={ProductList} />
          </div>
        </main>
      </div>
    )
  }
}

export default App

const ProductList = [
  {
    id: 0,
    name: 'iPhone 6 Black',
    value: 1000,
    currency: 'AED',
  },
  {
    id: 1,
    name: 'iPhone 7 Black',
    value: 2000,
    currency: 'AED',
  },
  {
    id: 2,
    name: 'iPhone 8 Black',
    value: 3000,
    currency: 'AED',
  },
]
