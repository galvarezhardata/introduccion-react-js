import React, { Component } from 'react'
import Clock from '../Clock/clock'
import '../Header/header.css'
import { Link } from "react-router-dom"


export default class Header extends Component {
    render() {
        return (
            <div className="col-12 app-header">
                <h2>
                    <Clock />
                </h2>
                
                <Link 
                    to={`/home`}
                    className="btn btn-outline-danger btn-sm m-1">
                        Home
                </Link>

                <Link 
                    to={`/pagina1`}
                    className="btn btn-outline-warning btn-sm m-1">
                        Pagina1
                </Link>
                
                <Link 
                    to={`/pagina2`}
                    className="btn btn-outline-warning btn-sm m-1">
                        Pagina2
                </Link>
                
                <Link 
                    to={`/pagina3`}
                    className="btn btn-outline-warning btn-sm m-1">
                        Pagina3
                </Link>
            </div>
        )
    }
}