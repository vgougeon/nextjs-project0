import React, { Component } from 'react';
import BodyImage from "../../components/layout/bodyImage"
import GameItemPreview from "../../components/elements/game/gameItemPreview"
import axios from 'axios';
import Icon from '../../components/elements/icon/icon';
import Loader from '../../components/elements/loader/loader';
import { AnimatePresence, motion } from 'framer-motion';
import Section from '../../components/layout/section';

class CreateGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: { searchName: ""},
            games: [],
            gamesLoading: false,
            game: {}
        }
    }
    handleChange(e){
        let form = this.state.form
        form[e.target.name] = e.target.value
        this.setState({ form: form });
    }
    async searchGame(){
        this.setState({ gamesLoading: true });
        const res = await axios({
            method: 'post',
            url: 'http://127.0.0.1/api/games/searchApiByName',
            data: {
                name: this.state.form.searchName
            }
        })
        console.log(res.data)
        if(res.data.success){
            this.setState({ games: res.data.data });
        }
        this.setState({ gamesLoading: false  });
    }
    async chooseGame(id){
        const res = await axios({
            method: 'post',
            url: 'http://127.0.0.1/api/games/getApiByName',
            data: {
                id: id
            }
        })
        console.log(res.data)
        if(res.data.success){
            this.setState({ game: res.data.data });
        }
    }
    render() { 
        return (  
            <Section>
            <div className="container max flex flex-wrap -mx-2 mt-4">
                <div className="w-full lg:w-1/4 px-2">
                    <article>
                        <h2 className="p-3 m-0 soft-line">Générateur</h2>
                        <div className="input-icon soft-line">
                            <input type="text" name="searchName" value={this.state.form.searchName }
                            onChange={ this.handleChange.bind(this) }
                            placeholder="Nom du jeu" className="pr-10"/>
                            <button className="soft" onClick={ this.searchGame.bind(this) }>
                                <Icon name="search" size="16px"></Icon>
                            </button>
                        </div>
                        <AnimatePresence>
                        { this.state.games.map(game =>
                            <motion.div
                            key={ game.id }
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto"}}
                            className="clickable" 
                            onClick={ this.chooseGame.bind(this, game.id)}>
                                <GameItemPreview {...game} />
                            </motion.div>
                        )}
                        </AnimatePresence>
                        <AnimatePresence>
                        { this.state.gamesLoading &&
                        <Loader />
                        }
                        </AnimatePresence>
                    </article>
                </div>
                <div className="w-full lg:w-3/4 px-2">
                    <article>
                        <h2 className="p-3 m-0 soft-line">Détails avancés</h2>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-2/4 px-3">
                                <label for="name">Nom</label>
                                <input type="text" name="name" 
                                value={ this.state.game.name }/>
                            </div>
                            <div className="w-full lg:w-2/4 px-3">
                            <label for="name">Cover</label>
                                <input type="text" name="cover" 
                                value={(this.state.game.cover ? "https://images.igdb.com/igdb/image/upload/t_cover_big/" + this.state.game.cover.image_id + ".jpg" : "") }/>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            </Section>
        );
    }
}
  
export default CreateGame