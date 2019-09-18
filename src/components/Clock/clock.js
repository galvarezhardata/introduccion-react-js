import React, { Component } from 'react'

export default class Clock extends Component {
    
    // initialise the state.
    constructor() {
        super();
        this.state = { time: new Date() };
    }

    // create the interval once component is mounted every 1 seconds.
    componentDidMount() { 
        this.update = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1 * 1000);
    }

    // delete the interval just before component is removed.
    componentWillUnmount() {
        clearInterval(this.update);
    }

    render() {
        // retrieve the time from state.
        const { time } = this.state; 
        
        return (
            <div>
                { time.toLocaleTimeString() }
            </div>
        )
    }
}