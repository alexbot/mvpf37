import React from 'react'
import FormRow from './formRow.jsx'
import FormInput from './formInput.jsx'

const DevView = props => {
    const imgStyle = {
        height: 50
    };
    const texts = [props.firstName, props.lastName, props.email, props.type, props.tech, props.techOther];
    return (
        <div>
            <FormRow label={props.image.label}>
                {props.image.value !== '' ? (<img src={props.image.value} style={imgStyle} />) : null}
            </FormRow>
            {texts.map(item => {
                return !item.hidden ? (
                    <FormRow key={item.label} label={item.label}>
                        <span>{item.value}</span>
                    </FormRow>
                ) : null;
            })}
        </div>
    )
}

const ViewItem = React.PropTypes.shape({
    value: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    hidden: React.PropTypes.bool
});

DevView.PropTypes = {
    image: ViewItem.isRequired,
    firstName: ViewItem.isRequired,
    lastName: ViewItem.isRequired,
    email: ViewItem.isRequired,
    type: ViewItem.isRequired,
    tech: ViewItem.isRequired,
    techOther: ViewItem.isRequired,
}

export default DevView