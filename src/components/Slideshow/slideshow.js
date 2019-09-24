import React, { Component } from 'react'
import Card from '../Card/card'

export default class Slideshow extends Component {

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //            Métodos del ciclo de vida
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
    constructor() {
        super()
        this.state = { 
            pokemon: {}, 
            isLoading: true 
        }
    }
    
    componentDidMount() {
        this.fetchPokemonByNumber(6)
    }
    
    render() {
        
        if (this.state.isLoading) {
            return null
        }

        const { pokemon } = this.state

        return (
            <div>
                <Card 
                    image={pokemon.sprites.front_default} 
                    title={`${pokemon.name} (${pokemon.types[0].type.name}/${pokemon.types[1].type.name})`}
                    text="Lorem ipsum dolor sit amet..." />
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
        
    }