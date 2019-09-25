import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../Card/card.css'

export default class Card extends Component {
    static propTypes = {
        image: PropTypes.string.isRequired,
        text:  PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        type1: PropTypes.string.isRequired,
        type2: PropTypes.string
    }

    static defaultProps = {
        type2: ''        
    }

    constructor() {
        super()
        this.state = {}
    }

    render() {
        const { image, text, title, type1, type2 } = this.props

        return (
            <div className="card app-card">
                <img className="card-img-top" src={image} alt={``} />
                <div className="card-body">
                    <h5 className="card-title text-capitalize">
                        {title}
                    </h5>
                    <p className="card-text text-capitalize">
                        {type1} {type2 !== null ? '/' : ''} {type2}
                    </p>
                    <p className="card-text">{text}</p>
                </div>
            </div>
        )
    }
}