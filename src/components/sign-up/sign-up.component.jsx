import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component'
import './sign-up.styles.scss'

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '' 
        }
    }
    render() {
        return(
            <div>
                <FormInput />
            </div>
        )
    }
}

export default SignUp;