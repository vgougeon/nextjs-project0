import styles from './gameItem.module.scss';
import GameCover from './gameCover';
const moment = require('moment');

const GameItemPreview = (props) => {
    const cover = props.cover ? 
    props.cover.image_id
    : ""
    return (  
        <div className={styles.gameItem}>
            <div className="flex h-full items-center px-2">
            <GameCover width="50px" ratio="50%" src={ cover } />
                <div className="flex flex-col ml-2">
                    <span className="font-semibold">{ props.name }</span>
                    <span className="opacity-75">{ moment(new Date(props.first_release_date * 1000)).format('MMMM YYYY') }</span>
                </div>
            </div>
        </div>
    );
}
 
export default GameItemPreview;