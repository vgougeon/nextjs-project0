import React from 'react';
import styles from './item.module.scss';
import Icon from '../icon/icon';
import CheckBox from '../form/checkbox';
const Item = (props) => {
    return (  
        <div className={ styles.item }>
            <CheckBox className="mr-3" checked = { props.checked } />
            <span>{ props.name }</span>
        </div>
    );
}
 
export default Item;