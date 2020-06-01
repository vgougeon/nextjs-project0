import React, { Component } from 'react';
import styles from "./gameCard.module.scss"
import GameCover from './gameCover';
const moment = require('moment')
class GameCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  

        }
    }
    render() { 
        return (  
            <div className={"w-full flex " + styles.gameCard}>
                <GameCover src={ this.props.cover } />
                <div className="flex flex-col p-3">
                    <h3>{ this.props.name }</h3>
                    <span className="text-sm font-light opacity-75">{ moment(this.props.releasedAt).format('MMMM YYYY') }</span>
                </div>
            </div>
        );
    }
}
 
export default GameCard;