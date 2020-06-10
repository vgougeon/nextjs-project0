import React from 'react';
import styles from './console.module.scss';
const ConsoleItem = (props) => {
    return (  
        <div className={ styles.item } style={{ background: props.color}}>
            { props.name }
        </div>
    );
}
 
export default ConsoleItem;