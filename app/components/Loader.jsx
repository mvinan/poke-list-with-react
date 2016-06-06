import React,{Component} from 'react';

export default class Loader extends Component{
  constructor(props) {
    super(props);
    this.m1 = `Espera por favor… unos Segundos… No tardaremos en cargar el contenido.`
    this.state = {
      isMessageLoad: false,
      isLoading: this.props.isLoaded
    };
  }

  componentDidMount(){
    this.setState({isMessageLoad: true })
  }

  confirmIsLoaded(){
    this.state.isMessageLoad ? setTimeout(() => console.log(this.m1), 4000) : false
  }

  render(){
    // this.confirmIsLoaded();
    return (
      <div id="loader" className="ui grid container">
        <div className="row">
          <div className="loader">Cargando…</div>
        </div>
        <div className="row centered">
          <p>{this.confirmIsLoaded.bind(this)}</p>
        </div>
      </div>
    );
  }
}