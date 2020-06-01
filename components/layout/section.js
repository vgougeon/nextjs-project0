import React, { Component } from 'react';
import { motion } from 'framer-motion';

const Section = (props) => {
    return (  
        <motion.section
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}

        >
            { props.children }
        </motion.section>
    );
}
 
export default Section;