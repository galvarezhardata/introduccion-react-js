import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Card extends Component {
    static propTypes = {
        image: PropTypes.string.isRequired,
        text:  PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }

    constructor() {
        super()
        this.state = {}
    }

    render() {
        const { image, text, title } = this.props

        return (
            <div 
                className="card" 
                style={{ width: "18rem" }}>
                <img className="card-img-top" src={image} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                </div>
            </div>
        )
    }
}