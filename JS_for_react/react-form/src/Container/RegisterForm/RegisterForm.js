import React, { Component } from 'react'
import '../../App.css'
import Input from './../Input/Input';

export class RegisterForm extends Component {
    state = {
        formData: {
            name: {
                value: "",
                validator: {
                    minLength: 3,
                    maxLength: 6,
                    required: true
                },
                error: { status: true, message: "",isTouched:false }
            },
            phoneNumber: {
                value: "",
                validator: {
                    minLength: 10,
                    maxLength: 10
                },
                error: { status: true, message: "",isTouched:false }
            },
            email: {
                value: "",
                validator: {
                    required: true
                },
                error: { status: true, message: "",isTouched:false }
            },
            password: {
                value: "",
                validator: {
                    minLength: 6,
                    maxLength: 24,
                    required: true
                },
                error: { status: true, message: "",isTouched:false }
            }
        },
        isFormValid: false
    }

    checkValue = (value, rules) => {
        let isValid = true;
        let message;
        let trimmedValue = value.trim();
        if (rules.required && trimmedValue.length === 0) {
            isValid = false;
            message = "Need to be filled in"
        }
        if (rules.maxLength && trimmedValue.length > rules.maxLength) {
            isValid = false;
            message = `Value length need to be less than ${rules.maxLength}`
        }
        if (rules.minLength && trimmedValue.length < rules.minLength) {
            isValid = false;
            message = `Value length need to be more than ${rules.minLength}`
        }
        return { isValid, message }
    }

    onChangeInput = (e) => {
        const field = e.target.name;
        console.log(field)
        const fieldValue = e.target.value;
        const updatedFormData = { ...this.state.formData };
        console.log(updatedFormData[field].validator)
        updatedFormData[field].value = fieldValue;
        let { isValid, message } = this.checkValue(e.target.value, updatedFormData[field].validator);
        updatedFormData[field].error.status = !isValid;
        updatedFormData[field].error.message = message;
        updatedFormData[field].error.isTouched = true;

        let newIsFormValid = true;
        for (let el in updatedFormData) {
            if (updatedFormData[el].validator.required === true) {
                newIsFormValid = !updatedFormData[el].error.status && newIsFormValid
            }
        }

        this.setState({
            formData: updatedFormData,
            isFormValid: newIsFormValid
        })
    }
    onSubmitForm = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        const { name, phoneNumber, email, password } = this.state.formData
        return (
            <div className="RegisterForm">
                <form onSubmit={this.onSubmitForm}>
                    <Input
                        onChangeInput={this.onChangeInput}
                        value={name.value}
                        name="name"
                        placeholder="Name"
                        error={name.error} />
                    <Input onChangeInput={this.onChangeInput} value={phoneNumber.value} name="phoneNumber" placeholder="Phone Number" error={phoneNumber.error} />
                    <Input onChangeInput={this.onChangeInput} value={email.value} name="email" placeholder="Email" error={email.error} />
                    <Input onChangeInput={this.onChangeInput} value={password.value} name="password" placeholder="Password" error={password.error} />
                    <button disabled={!this.state.isFormValid} htmlFor="submit" className="Button">Register</button>
                </form>
            </div>
        )
    }
}

export default RegisterForm
