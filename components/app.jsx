import React from 'react'
import ReactDOM from 'react-dom'
import DevForm from './devForm.jsx'
import Popup from './popup.jsx'
import DevView from './devView.jsx'

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            image: { label: 'Image', value: '', onChange: v => this.handleImageChange(v) },
            name: { label: 'Name', value: '', onChange: e => this.handleNameChange(e) },
            firstName: { label: 'First name', value: '' },
            lastName: { label: 'Last name', value: '' },
            email: { label: 'Email', value: '', onChange: e => this.handleEmailChange(e) },
            type: { label: 'Dev type', value: 'Backend', options: ['Backend', 'Frontend', 'Mobile'], onChange: e => this.handleTypeChange(e) },            
            tech: { label: 'Technology', value: '', options: [], onChange: e => this.handleTechChange(e) },
            techOther: { label: 'Other tech', value: '', onChange: e => this.handleTechOtherChange(e) },
        };

        this.validateEmail();
        this.invalidateTech();
    }

    handleImageChange(v) {
        
        this.state.image.value = v;

        this.setState(Object.assign({}, this.state));
    }

    handleNameChange(e) {

        this.state.name.value = e.target.value;

        var splitName = (this.state.name.value || '').match(/[^ ]+/g);

        this.state.firstName.value = splitName.slice(0, -1).join(' ');
        this.state.lastName.value = splitName.slice(-1).join(' ');

        this.setState(Object.assign({}, this.state));
    }

    validateEmail() {

        var { email } = this.state;

        if (!email.value) {
            email.error = 'not yet a meaningful value';
        } else if (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email.value)) {
            email.error = 'not yet an email';
        } else {
            email.error = null;
        }

        this.state.isValid = !Object.keys(this.state).some(el => !!this.state[el].error);
    }

    handleEmailChange(e) {

        this.state.email.value = e.target.value;

        this.validateEmail();

        this.setState(Object.assign({}, this.state));
    }

    invalidateTech() {

        var { type, tech } = this.state;

        if (type.value === 'Backend') {
            tech.options = ['Node', 'Ruby', 'Python', 'Other'];
        } else if (type.value === 'Frontend') {
            tech.options = ['ReactJS', 'VueJS', 'AngularJS'];
        }
        tech.value = tech.options.length ? tech.options[0] : '';
        tech.hidden = !tech.value;

        this.invalidateTechOther();
    }

    handleTypeChange(e) {
        
        this.state.type.value = e.target.value;

        this.invalidateTech();

        this.setState(Object.assign({}, this.state));
    }

    invalidateTechOther() {

        var { tech, techOther } = this.state;

        techOther.value = '';
        techOther.hidden = tech.value !== 'Other';
    }

    handleTechChange(e) {

        this.state.tech.value = e.target.value;

        this.invalidateTechOther();

        this.setState(Object.assign({}, this.state));
    }

    handleTechOtherChange(e) {
        
        this.state.techOther.value = e.target.value;

        this.setState(Object.assign({}, this.state));
    }

    toggleModal() {

        this.setState(Object.assign({}, this.state, { isPopupOpen: !this.state.isPopupOpen }));
    }

    render() {

        return (
            <div>
                <DevForm {...this.state} onConfirm={this.toggleModal.bind(this)} />
                <Popup show={this.state.isPopupOpen} onClose={this.toggleModal.bind(this)}>
                    <DevView {...this.state} onConfirm={this.toggleModal.bind(this)} />
                </Popup>
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app-container'))