import { render } from '@testing-library/react';
import React, { Component } from 'react';

class Inquiry extends Component {
    state = {
        name: "",
        email: "",
        remarks: ""
    }


onNameChange = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
}

onEmailChange = (e) => {
    e.preventDefault();
    this.setState({ email: e.target.value });
}

onRemarksChange = (e) => {
    e.preventDefault();
    this.setState({ remarks: e.target.value });
}

onSubmit = (e) => {
    e.preventDefault();
    const house = this.props.house;
    const contactInfo = this.state;
    //send
}

render() {
    return (
        <form className="mt-2">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                type="text"
                className="form-control"
                placeholder="Name"
                id="name"
                >
                </input>
            </div>
            <label htmlFor="name">Email Address</label>
                <input
                type="text"
                className="form-control"
                placeholder="Email"
                id="email"
                >
                </input>
                <label htmlFor="name">Remarks</label>
                <input
                type="text"
                className="form-control"
                placeholder="Remarks"
                id="remarks"
                >
                </input>
                <br></br>
                <input type="submit" value="Submit">
                    </input>
        </form>
    )
}
}
export default Inquiry;