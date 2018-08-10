import React from 'react'
import PropTypes from 'prop-types'

// logo image
import carreFourIcon from '../../assets/images/carrefour-icon.png'
import carreFourName from '../../assets/images/carrefour-name.png'

const Products = props => {
  const product = props.products.map(product => (
    <div className="col" key={product.id}>
      <div className="card">
        <div className="card-top">
          <div className="logo logo-vertical">
            <i className="logo__icon">
              <img src={carreFourIcon} alt="carrefour icon" />
            </i>
            <span className="logo__name">
              <img src={carreFourName} alt="carrefour" />
            </span>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <div className="product-price">
            {product.currency} {product.value}
          </div>
        </div>
      </div>
    </div>
  ))

  return (
    <section className="products">
      <div className="row">{product}</div>
    </section>
  )
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
}

export default Products
