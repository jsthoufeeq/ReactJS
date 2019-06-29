import React from 'react';

class FormComponent extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            fields : {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        let formFields = this.state.fields;
        formFields[e.target.name] = e.target.value;

        // formFields = { username : 'thoufeeq'}
        this.setState({
            fields: formFields
        });
    }

    submitForm = (e) => {
        e.preventDefault();
        //make an async call here -> 
        if(this.validateForm()) {
            this.setState({
                fields: {
                    username: '',
                    phonenumber: '',
                    password: ''
                }
            })
        }
    }

    validateForm = () => {
        let formFields = this.state.fields,
        formErrors = {},
        isFormValid = true;
        if(!formFields["username"]) {
            isFormValid = false;
            formErrors["username"] = "Please enter your user name";
        }

        if(!formFields.phonenumber) {
            isFormValid = false;
            formErrors["phonenumber"] = "Please enter your phone number";
        }

        if(typeof formFields["phonenumber"] !== "undefined") {
            if (!formFields.phonenumber.match(/^[0-9]{10}$/)) {
                isFormValid = false;
                formErrors["phonenumber"] = "Please enter valid phone number";
            }
        }

        if(!formFields.password) {
            isFormValid = false;
            formErrors["password"] = "Please enter your password";
        }

        this.setState({
            errors: formErrors
        })

        return isFormValid;

    }

    render() {
        return (
            <div className="form">
                <form onSubmit={this.submitForm}>
                    <div className="formContent">
                        <label className="label">UserName : </label>
                        <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} placeholder="Please enter your user name"/>
                        <div className="errorContent">{this.state.errors.username}</div>
                    </div>
                    <div className="formContent">
                        <label className="label">Phone Number : </label>
                        <input type="number" name="phonenumber" value={this.state.fields.phonenumber} onChange={this.handleChange} placeholder="Please enter your phone number"/>
                        <div className="errorContent">{this.state.errors.phonenumber}</div>
                    </div>
                    <div className="formContent">
                        <label className="label">Password : </label>
                        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} placeholder="Please enter your password here"/>
                        <div className="errorContent">{this.state.errors.password}</div>
                    </div>
                    <div className="formContent">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormComponent;