import React from 'react'
import PropTypes from 'prop-types'

const FromGroup = props => (
  <div className={`form-group ${props.error ? 'error' : ' '}`}>
    {props.error && <span className="error-text">Required field</span>}
    <label className="form-label" htmlFor={props.name}>
      {props.label}
    </label>
    <input
      type={props.type}
      id={props.id}
      name={props.name}
      className="form-control"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      pattern={props.pattern && props.pattern}
    />
  </div>
)

FromGroup.propTypes = {
  error: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  pattern: PropTypes.string,
}

export default FromGroup
