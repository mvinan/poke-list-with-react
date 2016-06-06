/*
 * Styles
 */

import './index.sass';

/*
 * Module dependencies
 */
import React from 'react';
import ReactDom from 'react-dom';
import PokeListView from './components/PokeListView.jsx';
// import Buscador from './components/Buscador.jsx';
import Home from './views/Home.jsx'
import PokeView from './views/PokeView.jsx'
import { Router, Route, Link, browserHistory, hashHistory, IndexRoute, IndexLink } from 'react-router';


export default class App extends React.Component {
  render () {
    return(
      <div className="ui grid container">
        <div className="three wide column">
          <ul role="nav" className="ui left fixed secondary vertical menu">
            <Link to="/" className="item" activeClassName="active" onlyActiveOnIndex={true}>Home</Link>
            <Link to="/pokelist" className="item" activeClassName="active">Poke list</Link>
            {/*<li><Link to="/buscador" className="item">Buscador</Link></li>*/}
          </ul>
        </div>
        <div  className="thirteen wide column">
          {this.props.children}
        </div> 
      </div>
    )
  }
}

ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/pokelist" component={PokeListView}/>
      <Route path="/pokelist/:pokeId" component={PokeView} />
    </Route>
  </Router>,
  document.getElementById('app')
);