import React from 'react';
import style from './avatar.module.scss';
const Avatar = (props) => {
    return (  
        <div class={ style.avatar + " " + props.className } style={{ width: props.size, height: props.size }}>
            { props.avatar ?
            <img src={ props.avatar } /> :
            <img src="https://dummyimage.com/400x400/81f/fff" />
            }
        </div>
    );
}
 
export default Avatar;