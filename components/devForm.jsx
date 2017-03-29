import React from 'react'
import FormRow from './formRow.jsx'
import FormInput from './formInput.jsx'
import ImgPreview from './imgPreview.jsx'
import Input from './input.jsx'
import Select from './select.jsx'

const DevForm = props => (
    <div style={{ width: '800px' }}>
        {!props.image.hidden && 
        <FormRow label={props.image.label}>
            <FormInput error={props.image.error}>
                <ImgPreview {...props.image} />
            </FormInput>
        </FormRow>}
        {!props.name.hidden && 
        <FormRow label={props.name.label}>
            <FormInput error={props.name.error}>
                <Input {...props.name} />
            </FormInput>
        </FormRow>}
        {!props.email.hidden &&
        <FormRow label={props.email.label}>
            <FormInput error={props.email.error}>
                <Input {...props.email} />
            </FormInput>
        </FormRow>}
        {!props.type.hidden &&
        <FormRow label={props.type.label}>
            <FormInput error={props.type.error}>
                <Select {...props.type} />
            </FormInput>
        </FormRow>}
        {!props.tech.hidden &&
        <FormRow label={props.tech.label}>
            <FormInput error={props.tech.error}>
                <Select {...props.tech} />
                {!props.techOther.hidden &&
                <Input {...props.techOther} />}
            </FormInput>
        </FormRow>}
        <button disabled={!props.isValid} onClick={props.onConfirm}>Confirm</button>
    </div>
)

const FormItem = React.PropTypes.shape({
    value: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    error: React.PropTypes.string.isRequired,
    hidden: React.PropTypes.bool
});

DevForm.PropTypes = {
    image: FormItem.isRequired,
    lastName: FormItem.isRequired,
    email: FormItem.isRequired,
    type: FormItem.isRequired,
    tech: FormItem.isRequired,
    techOther: FormItem.isRequired,
    isValid: React.PropTypes.bool.isRequired,
    onConfirm: React.PropTypes.func.isRequired
}

export default DevForm