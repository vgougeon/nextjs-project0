import React, { Component } from 'react';
import Loader from '../loader/loader';

class Img extends Component {
  state = { 
    loaded: false
  }
  onLoad = () => {
    this.setState({ loaded: true });
  };
  render() { 
    if(this.props.ratio === undefined){
      return (
        <React.Fragment>
        <img 
        className={ this.props.className + ' dynamic' + (this.state.loaded ? "" : " loadImg")}
        src={ this.props.src } 
        alt={ this.props.alt } 
        onLoad={ this.onLoad }
        />
        </React.Fragment>
      );
    } else {
      return (
        <div className="img-ratio" style={{ width: this.props.width }}>
          <div className="ratio-box" style={{ paddingTop: this.props.ratio }}>
            <Loader />
            <img className={ this.props.className + ' ratio dynamic' + (this.state.loaded ? "" : " loadImg")}
            src={ this.props.src } 
            alt={ this.props.alt } 
            onLoad={ this.onLoad } />
          </div> 
        </div>
      );
    }
  }
}
 
export default Img;