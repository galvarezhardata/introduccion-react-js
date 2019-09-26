import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../Info/info.css'
import Counter from '../Counter/counter'

export default class Info extends Component {

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //            PropTypes
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
    static propTypes = {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        type1: PropTypes.string.isRequired,
        type2: PropTypes.string,
        imageDefMale: PropTypes.string.isRequired,
        imageShiMale: PropTypes.string.isRequired,
        imageDefFemale: PropTypes.string,
        imageShiFemale: PropTypes.string
    }

    static defaultProps = {
        type2: '',
        imageDefFemale: '',
        imageShiFemale: ''                
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
            title,
            subtitle,
            text,
            type1,
            type2,
            imageDefMale,
            imageShiMale,
            imageDefFemale,
            imageShiFemale            
        } = this.props
        
        return (
            <div className="app-cborder">
                <div className="app-cname">
                    INFO
                </div>

                <div className="pl-1 pt-1">
                    <Counter />
                </div>

                <div class="pl-2 pt-2 pr-2">
                    <h3 className="text-capitalize">
                        {title} <span className="app-types">{type1} {type2 !== null ? '/' : ''} {type2}</span>
                    </h3>
                    
                    <h5>
                        {subtitle}
                    </h5>
                    
                    <p className="">
                        {text}
                    </p>

                    <img src={imageDefMale} alt={``} />
                    <img src={imageShiMale} alt={``} />
                    <img src={imageDefFemale} alt={``} />
                    <img src={imageShiFemale} alt={``} />
                </div>
            </div>
        )
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //            Métodos del componente
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
}    