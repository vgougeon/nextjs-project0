import React, { Component } from 'react';
import Link from 'next/link';
import Icon from '../elements/icon/icon';
import Avatar from '../elements/avatar/avatar';
class BodyImage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <>
            <div class="header-body-image">
                <img className="body-image-src" src={ this.props.img }/>
                <div className="body-image-color"/>
            </div>
            <div class="body-image" ref={ this.bodyImage}>
                <img className="body-image-src" src={ this.props.img } />
                <div className="body-image-gradient" />
                <div className="body-image-color"/>
            </div>
            <div class="header-relative"></div>
            </>
        );
    }
}
 
export default BodyImage;