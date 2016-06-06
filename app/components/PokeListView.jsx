// Styles
import './PokeListView.sass';

/*
 * Module Dependecies
 */
import React from 'react';
import pokeAPI from 'pokeapi';
import Poke from './Poke.jsx';
import SearchInput from './filter.jsx';
import PokeListContainer from './PokeListContainer.jsx';
import Loader from './Loader.jsx';

var api = pokeAPI.v1();


var PokeListView = React.createClass ({
  getInitialState: function(){
    var localStorageGetItem = localStorage.getItem('PokeList');
    var localStorageParse = JSON.parse(localStorageGetItem);
    var localStoragePokeList = localStorageParse || ""
    return {
      pokeObjs: localStoragePokeList,
      loaded: false,
      inputSearch: ''
    };
  },

  componentDidMount: function(){
    var pokeArray = [];
    var localStoragePokeList = localStorage.getItem("PokeList")
    let rangeMin = 1
    let rangeMax = 150
    if( localStoragePokeList === null){
      this.fetchPokemons(`${rangeMin}-${rangeMax}`)
    }else{
      let oldLocalS = JSON.parse(localStoragePokeList)
      if( oldLocalS.length == rangeMax){
        this.setState({loaded: true})
      }else{
        this.fetchPokemons(`${rangeMin}-${rangeMax}`)
      }
    }
  },

  fetchPokemons: function(range){
      // request to api pokeapi.co for 151 pokes and save in pokeArray
    var pokeArray = [];
    api.get('pokemon', range) 
      .then(function(pokemons){
        pokemons.map( pokemon => pokeArray.push(pokemon) )
      })
      .then( () => {      
        this.setSelectedOption(pokeArray)
        this.setState({loaded: true})
      })
  },

  setSelectedOption: function(option){
    // var stringOption = JSON.stringify(this.state)
    localStorage.setItem('PokeList', JSON.stringify(option));
    this.setState({ pokeObjs: option })
  },

  updateInput: function(e){
    this.setState({inputSearch: e.target.value })
  },

  render: function(){
      var pokeList = this.state.pokeObjs
      var inputSearch = this.state.inputSearch
      var currentState = this.state.loaded ? true : false
      if(currentState){
        return (
          <div>
            <SearchInput captureInput={this.updateInput}/>
            <PokeListContainer pokeObjs={pokeList} inputSearch={inputSearch}/>
          </div>);
      }else{
        return <Loader isLoaded={currentState}/>
      }
    }
})

module.exports = PokeListView;