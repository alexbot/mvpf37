import React from 'react'

const Popup = props => {

    const backdropStyle = {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 50
    };

    const modalStyle = {
        backgroundColor: '#fff',
        borderRadius: 5,
        maxWidth: 500,
        minHeight: 300,
        margin: '0 auto',
        padding: 30,
        position: 'relative'
    };

    const closeStyle = {
        position: 'absolute',
        top: 3,
        right: 3
    };

    return props.show ? (
        <div style={backdropStyle}>
            <div style={modalStyle}>
                {props.children}
                <div style={closeStyle}>
                    <button onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    ) : null;
}

Popup.PropTypes = {
    show: React.PropTypes.bool.isRequired,
    onClose: React.PropTypes.func.isRequired
}

export default Popup