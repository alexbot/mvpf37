import React from 'react'

const FormInput = props => (
    <div style={{ width: '100%' }}>
        <div style={{float: 'left' }}>
            {props.children}
        </div>
        <span style={{float: 'left', color: 'red'}}>{props.error}</span>
    </div>
)

FormInput.PropTypes = {
    error: React.PropTypes.string
}

export default FormInput