import React,{Component} from 'react';
import Poke from './Poke.jsx';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import CSSTransitionGroup from 'react-addons-css-transition-group';


export default class PokeListContainer extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    var pokeList = this.props.pokeObjs
    var inputSearch = this.props.inputSearch
    var pokes = this.props.pokeObjs.map( poke => {
            let pokeLowerName = poke.name.toLowerCase()
            let inputSearchLower = inputSearch.toLowerCase()
            if(pokeLowerName.search(inputSearchLower) > -1 ){
              return (
                  <Poke number={poke.pkdx_id} key={poke.pkdx_id} data={poke}/>
                )
            }
          })
    return(
      <div className="ui centered cards four column">
        {pokes}
      </div>)
  }


}