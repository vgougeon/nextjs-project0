import React, { Component } from 'react';
import Link from 'next/link';
import Icon from './elements/icon/icon';
import Avatar from './elements/avatar/avatar';
class BackHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            display: "none"
        }
        this.container = React.createRef();
        this.background = React.createRef();
        this.maxHeight = 0
        
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.maxHeight = this.container.current.offsetHeight
        this.setState({ height: getComputedStyle(this.container.current).height, display: "block" });
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(event) {
        const scroll = document.documentElement.scrollTop
        const header = document.querySelector('header').offsetHeight
        if(scroll < this.maxHeight - header){
            this.setState({ height: this.maxHeight - scroll});
        }
        else {
            this.setState({ height: header});
        }
    }
    render() { 
        return (
            <div class="bg-header jumbotron" ref={this.container} >
                <div class="background" ref={this.container} style={{ height: this.state.height, display: this.state.display }}>
                    <img src={ this.props.img } />
                </div>
            </div>
        );
    }
}
 
export default BackHeader;