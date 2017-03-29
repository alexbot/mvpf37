import React from 'react'

const FormRow = props => (
    <div style={{ width: '100%', clear: 'both' }}>
        <label>{props.label}:
            <div style={{ width: '50%', float: 'left' }}></div>
            <div style={{ width: '50%', float: 'right' }}>
                {props.children}
            </div>
        </label>
    </div>
)

FormRow.PropTypes = {
    label: React.PropTypes.string
}

export default FormRow