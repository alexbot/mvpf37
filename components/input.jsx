import React from 'react'

const Input = props => (
    <input type='text' value={props.value} onChange={props.onChange} />
)

Input.PropTypes = {
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
}

export default Input