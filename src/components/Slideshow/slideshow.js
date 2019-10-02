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
            <div className="app-cborder mt-1"> 
                <div>
                    
                    <div className="app-cname">
                        SLIDESHOW
                    </div>
                    
    
                    {/* ------------------------- Card ------------------------- */}
                    <div className="row">
                        <div className="col-12 col-xl-2 col-lg-3 col-md-4">
                            <div className="row pl-1 pr-1">
                                <div className="col-12 mb-1 mt-1 ">
                                    <Card 
                                        image={pokemon.sprites.front_default}
                                        title={pokemon.name}
                                        type1={pokemon.types[0].type.name}
                                        type2={pokemon.types.length === 2 ? pokemon.types[1].type.name : null}
                                        text="Lorem ipsum dolor sit amet..."/>
                                </div>                   
                            </div>
                            
                            {/* ------------------------- Botonera ------------------------- */}
                            
                            <div className="row pl-1 pr-1">

                                <div className="col-6">
                                    <i 
                                        className="material-icons btn app-btn-prev"
                                        onClick={this.fetchPrevPokemon}>
                                        keyboard_arrow_left
                                    </i>
                                </div>
                
                                <div className="col-6 text-right">
                                    <i 
                                        className="material-icons btn app-btn-next"
                                        onClick={this.fetchNextPokemon}>
                                        keyboard_arrow_right
                                    </i>
                                </div>

                                <div className="col-10"></div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-10 col-lg-9 col-md-8">
                            <div class="ml-1 mb-1 mt-1 mr-1">
                            <Info
                                imageDefMale={pokemon.sprites.front_default}
                                imageShiMale={pokemon.sprites.front_shiny}
                                imageDefFemale={pokemon.sprites.front_female}
                                imageShiFemale={pokemon.sprites.front_shiny_female}
                                title={pokemon.name}
                                type1={pokemon.types[0].type.name}
                                type2={pokemon.types.length === 2 ? pokemon.types[1].type.name : null}
                                subtitle="Lorem ipsum dolor sit amet..."
                                text="Consectetur adipiscing elit. Etiam a nibh eu enim ornare egestas sit amet id orci. Cras varius mauris vitae dolor sollicitudin gravida. In ut faucibus massa. Mauris mattis tempor nulla posuere eleifend. Duis rhoncus rutrum nibh, at vulputate sapien tincidunt sit amet. Nulla quis purus eros. Proin convallis vestibulum risus. Integer lobortis, lacus eget suscipit congue, magna diam elementum nulla, et congue mauris tortor vel tortor."/>
                            </div> 
                        </div>
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