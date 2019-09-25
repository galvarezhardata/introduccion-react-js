import React, { Component } from 'react'
import Card from '../Card/card'
import '../Slideshow/slideshow.css'

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
            <div class="container-fluid">

                <div className="row mt-3">
                    <div className="col-12">
                        <Card 
                            image={pokemon.sprites.front_default}
                            title={pokemon.name}
                            type1={pokemon.types[0].type.name}
                            type2={pokemon.types.length === 2 ? pokemon.types[1].type.name : null}
                            text="Lorem ipsum dolor sit amet..."/>
                    </div>
                </div>
                
                <div className="row mt-3">
                    <div className="col-1">
                        <i 
                            className="material-icons btn app-btn-prev"
                            onClick={this.fetchPrevPokemon}>
                            keyboard_arrow_left
                        </i>
                    </div>
    
                    <div className="col-1">
                        <i 
                            className="material-icons btn app-btn-next"
                            onClick={this.fetchNextPokemon}>
                            keyboard_arrow_right
                        </i>
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