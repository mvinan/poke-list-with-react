import React,{Component} from 'react';

export default class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchInput: ''};
    // this.updateSearchInput = this.updateSearchInput.bind(this)
  }
  render(){
    return (
      <div className="ui grid">
        <div className="two column row">
          <div className="column">              
            <div className="ui fluid icon input">
              <input type="text" placeholder="Busca tu pokemón..." onChange={this.props.captureInput}/>
              <i className="search icon"></i>
            </div>
          </div>
        </div>
      </div> 
    )
  }
}