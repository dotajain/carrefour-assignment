import React from 'react'
import SearchForm from './SearchForm'

import carreFourIcon from '../../assets/images/carrefour-icon.png'
import carreFourName from '../../assets/images/carrefour-name.png'

const Header = () => (
  <header className="header">
    <div className="container">
      <button className="logo logo-horizontal">
        <i className="logo__icon">
          <img src={carreFourIcon} alt="carrefour icon" />
        </i>
        <span className="logo__name">
          <img src={carreFourName} alt="carrefour" />
        </span>
      </button>
      <SearchForm />
    </div>
  </header>
)

export default Header
