import React, { Component } from 'react'
import '../Counter/counter.css'

export default class Counter extends Component {

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //            PropTypes
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //            Métodos del ciclo de vida
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // initialise the state.
    constructor() {
        super();
        this.state = { count: 0 };
    }

    // create the interval once component is mounted every 1 seconds.
    componentDidMount() { 
        this.update = setInterval(() => {
            this.setState({ count: this.state.count + 1 });
        }, 1 * 1000);
    }

    // delete the interval just before component is removed.
    componentWillUnmount() {
        clearInterval(this.update);
    }

    render() {
        // retrieve the time from state.
        const { count } = this.state; 
        let counter = count < 10 ? '000' + count : count < 100 ? '00' + count : count < 999 ? '0' + count : count

        return (
            <div className="app-cborder app-dim">
                <div className="app-cname">
                    COUNTER
                </div>
                <p className="pl-2 pt-2 pb-2 pr-2">
                    { counter }
                </p>
            </div>
        )
    }
    
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //            Métodos del componente
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
}    