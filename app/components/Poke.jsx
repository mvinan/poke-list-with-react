// Require Styles
import './Poke.sass';

/*
 * Module Dependencies
 */
import React from 'react';
import _ from 'lodash';
import $ from 'jquery';
import {Link, browserHistory} from 'react-router';
import {n} from '../utilities/numberWithZeros.js';
// require('semantic-ui/dist/semantic.js');

window.jQuery = $;
export default class Poke extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
    this.clickPoke = this.clickPoke.bind(this)

    // purify idName
    this.idName = _.lowerCase(this.props.data.name).split(' ').join('');
  }

  clickPoke(e){
    e.preventDefault();
    
    // show modal in the same site
    // $(`#${this.idName}Modal`).modal({
    //   detachable: false
    // })
    // .modal('show')
    var path = `/pokelist/${this.props.number}`
    // browserHistory.push(path)
    this.context.router.push(path)
  }

  render(){
    let pokemon = this.props.data
    let pokeNumber = this.props.number
    let pokeImageUrl = `http://assets.pokemon.com/assets/cms2/img/pokedex/full/${n(pokeNumber)}.png`
    return (
      <div className="Pokemon olive fluid card">          
        <div className="Pokemon-image image" onClick={this.clickPoke}>
          {/*<Link to={`/pokelist/${this.idName}`}>*/}
          {/*<img src={`http://play.pokemonshowdown.com/sprites/xyani/${idName}.gif`} alt=""/>*/}
            <img src={pokeImageUrl} alt={this.idName}/> 
          {/*</Link>*/}
        </div>
        <div className="content">
          <div className="header ui grid two column">
            <p className="column">{pokemon.name}</p>
            <p className="column right aligned">{`Nº ${n(pokeNumber)}`}</p>
          </div>
          <div className="meta one column row">
            <span className="column">{pokemon.types[0].name}</span>
          </div>
        </div>
      </div>
      )
  }
}

Poke.contextTypes = {
  router: React.PropTypes.object
}