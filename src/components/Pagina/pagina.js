import React, { Component } from 'react'
import PropTypes from "prop-types"
import Counter from '../Counter/counter'

export default class Pagina extends Component {

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //            PropTypes
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        
    static propTypes = {
        image: PropTypes.string.isRequired,
        text:  PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        type1: PropTypes.string,
        type2: PropTypes.string
    }

    static defaultProps = {
        type1: '',        
        type2: ''        
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //            Métodos del ciclo de vida
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    constructor() {
        super()
        this.state = {}
    }

    render() {
        const {
            image,
            text,
            title
        } = this.props

        return (
            <div className="p-2">
                <h1>{title}</h1>
                <div>
                    <Counter />
                    <img src={image} alt=''/>
                </div>
                <p>{text}</p>                
            </div>
        )
    }
}