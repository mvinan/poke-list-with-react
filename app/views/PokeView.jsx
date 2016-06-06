// Styles
import './PokeView.sass';

/*
 * Module dependencies
 */
import React,{Component} from 'react';
import pokeAPI from 'pokeapi';
import _ from 'lodash';
import {n} from '../utilities/numberWithZeros'
import Loader from '../components/Loader.jsx'
var api = pokeAPI.v1();


export default class PokeView extends Component{
  constructor(props) {
    super(props);
    this.state = {
      pokemonData: "",
      isLoaded: false
    };
  }
  componentWillMount(){
    // request to api pokeapi.co for 151 pokes
    api.get('pokemon', this.props.params.pokeId)
      .then(pokemon => {
        this.setState({pokemonData: pokemon})
      })
      .then(()=>{
        this.setState({isLoaded: true})
      })
  }
  render(){
    var pokemon = this.state.pokemonData //its state status variable
    var pokemonName = _.lowerCase(pokemon.name).split(' ').join('');
    var pokeId = this.props.params.pokeId

    if(this.state.isLoaded){
      return (
        <div id="PokeView" className="ui grid container">
          <div className="two column row">        
            <h1 className="column title">{_.capitalize(pokemon.name)}</h1>
            <div className="ui header column right aligned">Nº {n(pokeId)}</div>
          </div>
          <div className="three column row">
            <div className="column">
              <img src={`http://assets.pokemon.com/assets/cms2/img/pokedex/full/${n(pokeId)}.png`}/>
            </div>
            <div id="PokeView-gifs" className="ui centered tiny images column">
              {_.range(1,4).map( (value)=>{
                return <img key={value} src={`http://play.pokemonshowdown.com/sprites/xyani/${pokemonName}.gif`} alt=""/>
              })}
            </div>
            <div className="ui column left grid">          
              <div className="column row">
                <div className="column left aligned"><strong>Attack</strong>:{pokemon.attack}</div>
              </div>
            </div>
          </div>
        </div>
        )
    }else{
      return <Loader />
    }

  }
}