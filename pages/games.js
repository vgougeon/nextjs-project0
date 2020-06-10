import BodyImage from "../components/layout/bodyImage"
import GameItem from "../components/elements/game/gameItem"
import axios from 'axios';
import GameCard from "../components/elements/game/gameCard";
import { motion } from "framer-motion";
import Section from "../components/layout/section";
import network from "../services/network.service";
import MultiSelect from "../components/elements/form/multiselect";
import ConsoleItem from "../components/elements/console/item";
import Item from "../components/elements/items/item";
const moment = require('moment')
function HomePage(props) {
    return (
    <Section>
    <div className="container max flex flex-wrap -mx-2 mt-4">
        <div className="w-full lg:w-1/4 px-2">
            <article>
                <label htmlFor="gameName">Nom du jeu</label>
                <input type="text" id="gameName" name="name"></input>
            </article>
            <article>
                <MultiSelect name="Consoles" data={props.consoles} layout={Item} />
            </article>
            <article>
                <MultiSelect name="Genres" data={props.genres} layout={Item} />
            </article>
        </div>
        <div className="w-full lg:w-3/4 px-2">
            <h2 className="px-3 pb-3 m-0 soft-line">Dernières sorties</h2>
            <div className="flex flex-col">
            { props.games.map(game => 
            <article key={game.id}>
                <GameCard {...game} />
            </article>
            )}
            </div>
        </div>
    </div>
    </Section>
    )
}
export async function getServerSideProps(ctx) {
    return { 
        props: {
            games : await network.get('games', ctx),
            consoles : await network.get('consoles', ctx),
            genres : await network.get('genres', ctx),
        }
    }
}
  
export default HomePage