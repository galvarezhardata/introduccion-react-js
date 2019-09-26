import React, { Component } from 'react'
import '../Slideshow/slideshow.css'
import Card from '../Card/card'
import Info from '../Info/info'

export default class Slideshow extends Component {

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //            Métodos del ciclo de vida
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
    constructor() {
        console.log("Constructor.")
        super()
        this.state = {
            actual: 1, 
            pokemon: {}, 
            isLoading: true 
        }

        this.fetchPrevPokemon = this.fetchPrevPokemon.bind(this)
        this.fetchNextPokemon = this.fetchNextPokemon.bind(this)
    }
    
    componentDidMount() {
        console.log("ComponentDidMount.")
        this.fetchPokemonByNumber(this.state.actual)
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("ComponentDidUpdate.")
        if (prevState.actual !== this.state.actual) {
            this.fetchPokemonByNumber(this.state.actual)
        }
    }

    render() {
        console.log("Render.")
        
        if (this.state.isLoading) {
            return null
        }

        const { pokemon } = this.state

        return (
            <div>
                <div className="app-cborder mt-1">
                    
                    <div className="app-cname">
                        SLIDESHOW
                    </div>
                    
    
                    {/* ------------------------- Card ------------------------- */}
                    
                    <div className="row">
                        <div className="col mt-1 ml-1 mr-1">
                            <Card 
                                image={pokemon.sprites.front_default}
                                title={pokemon.name}
                                type1={pokemon.types[0].type.name}
                                type2={pokemon.types.length === 2 ? pokemon.types[1].type.name : null}
                                text="Lorem ipsum dolor sit amet..."/>
                        </div>                   
                    </div>
                    
                    {/* ------------------------- Botonera ------------------------- */}
                    
                    <div className="row">

                        <div className="col mt-1 mb-1 ml-1">
                            <i 
                                className="material-icons btn app-btn-prev"
                                onClick={this.fetchPrevPokemon}>
                                keyboard_arrow_left
                            </i>
                        </div>
        
                        <div className="col mt-1 mb-1 ml-1">
                            <i 
                                className="material-icons btn app-btn-next"
                                onClick={this.fetchNextPokemon}>
                                keyboard_arrow_right
                            </i>
                        </div>

                        <div className="col-10"></div>
                    </div>
                </div>
            </div>
        )
    }
        
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //            Métodos del componente
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    fetchPokemonByNumber(id) {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`

        fetch(url)
        .then(res => res.json())
        .then(pokemon => {
            this.setState({ pokemon, isLoading: false });
        });
    }

    fetchPrevPokemon() {
        let { actual } = this.state
        
        actual = actual === 1 ? 1 : this.state.actual - 1
        
        this.setState({ actual })
    }
    
    fetchNextPokemon() {
        let { actual } = this.state
        
        actual = actual === 151 ? 151 : this.state.actual + 1
        
        this.setState({ actual })
    }
}