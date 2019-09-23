import React, { Component } from 'react'
import Card from '../Card/card'

export default class Slideshow extends Component {

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //            Métodos del ciclo de vida
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    constructor() {
        super()
        this.state = { pokemon: {} }
    }

    componentDidMount() {
        this.fetchPokemonByNumber(6)
    }
    
    render() {

        return (
                <Card
                    image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
                    text="El pokemon dragon"
                    title="Charizard" />
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
          this.setState({ pokemon });
          console.log(pokemon)

        });

        console.log("fetch: " + this.state.pokemon.id)
    }
}