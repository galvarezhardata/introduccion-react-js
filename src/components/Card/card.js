import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../Card/card.css'

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
            <div className="col-2">
                <div className="card app-card">
                    <img className="card-img-top" src={image} alt={``} />
                    <div className="card-body">
                        <h5 className="card-title text-capitalize">{title}</h5>
                        <p className="card-text">{text}</p>
                    </div>
                </div>
            </div>
        )
    }
}