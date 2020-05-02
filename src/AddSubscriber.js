import React, { Component } from 'react';
import Header from "./Header"
import './AddSubscriber.css'

class AddSubscriber extends Component {
    render() {
        <div>
            <Header heading="Add Subscriber" />
            <div className="component-body-container">
                <button className="custom-btn">Back</button>
                <form className="subscriber-form">
                    <label htmlFor="name" className="label-control">Name</label><br/>
                    <input id="name" type="text" className="input-control" name="name"/><br/><br/>
                    
                </form>
            </div>
        </div>
    }
}

export default AddSubscriber;