import React, { Component } from 'react'
import searchIcon from '../../assets/images/search-icon.png'

class SearchForm extends Component {
  state = {
    isSearch: false,
    searchValue: '',
  }
  _onSearchClick = () => {
    this.setState(
      {
        isSearch: true,
      },
      () => {
        this.focusOnInput.focus()
      },
    )
  }
  _onSearchChange = event => {
    this.setState({
      searchValue: event.target.value,
    })
  }

  render() {
    const { isSearch, searchValue } = this.state
    return (
      <div className="search">
        <form className="form form-search">
          <div className={`input-group input-animate ${isSearch ? 'in' : ' '}`}>
            <label htmlFor="search" className="sr-only form__label">
              Search
            </label>
            <input
              ref={e => (this.focusOnInput = e)}
              value={searchValue}
              onChange={e => this._onSearchChange(e)}
              type="search"
              className="form-control"
              placeholder="Search"
            />
            <div className="input-group-append">
              <button
                className="btn btn-secondary"
                type="button"
                onClick={this._onSearchClick}
              >
                <img src={searchIcon} alt="Search" />
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchForm
