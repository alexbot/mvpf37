import React from 'react'

const Select = props => (
    <select defaultValue={props.value} onChange={props.onChange}>
        {props.options.map(item => (<option key={item} value={item}>{item}</option>))}
    </select>
)

Select.PropTypes = {
    value: React.PropTypes.string.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    onChange: React.PropTypes.func.isRequired
}

export default Select