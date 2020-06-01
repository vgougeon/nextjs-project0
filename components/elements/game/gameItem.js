import styles from './gameItem.module.scss';
import GameCover from './gameCover';
const moment = require('moment');

const GameItem = (props) => {
    return (  
        <div className={styles.gameItem}>
            <div className="flex h-full items-center px-2">
                <GameCover width="50px" ratio="50%" src={ props.cover } />
                <div className="flex flex-col ml-2">
                    <span className="font-semibold">{ props.name }</span>
                    <span className="opacity-75">{ moment(props.releasedAt).format('MMMM YYYY') }</span>
                </div>
            </div>
        </div>
    );
}
 
export default GameItem;