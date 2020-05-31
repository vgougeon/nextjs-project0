import React from 'react';
import styles from './Icon.module.scss';
const icons = require('./icons.json');

const Icon = (props) => {
    return (
        <div className={(props.muted ? styles.muted : '') + " " + styles.icon + " " + props.className }>
            <svg  viewBox={ icons[props.name].viewBox } width={ props.size } height={ props.size }>
                <path d={ icons[props.name].path } />
            </svg>
        </div>
    );
}
 
export default Icon;