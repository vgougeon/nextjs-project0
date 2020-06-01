import Img from "../img/Img";

const GameCover = (props) => {
    if(props.ratio)
    return (
        <Img width={ props.width } ratio={ props.ratio } src={ "https://images.igdb.com/igdb/image/upload/t_cover_big/" + props.src + ".jpg" } />
    );
    else 
    return (
        <Img src={ "https://images.igdb.com/igdb/image/upload/t_cover_big/" + props.src + ".jpg" } />
    );
}
 
export default GameCover;