import BodyImage from "../components/layout/bodyImage"
import GameItem from "../components/elements/game/gameItem"
import axios from 'axios';
import GameCard from "../components/elements/game/gameCard";
import { motion } from "framer-motion";
import Section from "../components/layout/section";
const moment = require('moment')
function HomePage(props) {
    return (
    <Section>
    <div className="container max flex flex-wrap -mx-2 mt-4">
        <div className="w-full lg:w-1/4 px-2">
            <article>
                <h2 className="p-3 m-0 soft-line">Noveaux membres</h2>
                { props.users.map(user =>
                    <div className="flex p-2 items-center" key={user.id}>
                        <div className="flex flex-col w-full">
                            <div className="flex justify-between">
                                <span className="font-semibold">{ user.name }</span>
                                <span className="text-sm opacity-75">{ moment(user.createdAt).from() }</span>
                            </div>
                            <span className="text-sm opacity-75">@{ user.pseudo }</span>
                        </div>
                    </div>
                    
                )}
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
    const games = await axios({
        method: 'get',
        url: 'http://127.0.0.1/api/games',
        headers: { 'Cookie': ctx.req.headers.cookie }
    })
    const users = await axios({
        method: 'get',
        url: 'http://127.0.0.1/api/users',
        headers: { 'Cookie': ctx.req.headers.cookie }
    })
    console.log(users.data)
    return { 
        props: {
            games: games.data.data,
            users: users.data
        }
    }
}
  
export default HomePage