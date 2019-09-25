import React, { Component } from 'react'
import Clock from '../Clock/clock'
import '../Header/header.css'

export default class Header extends Component {
    render() {
        return (
            <div className="col-12 app-header">
                <h2>
                    <Clock />
                </h2>
            </div>
        )
    }
}