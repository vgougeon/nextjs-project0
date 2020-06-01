import styles from './loader.module.scss';
import React from 'react';
import { motion } from 'framer-motion'
const Loader = () => {
    return (  
        <motion.div 
        initial={{ opacity: 0, height: 0}}
        animate={{ opacity: 1, height: "auto"}}
        exit={{ opacity: 0, height: 0}}>
        <div className={ styles.spinner }>
            <div className={ styles.doubleBounce1 }></div>
            <div className={ styles.doubleBounce2 }></div>
        </div>
        </motion.div>
    );
}
 
export default Loader;