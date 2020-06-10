import styles from './select.module.scss';
import React, { Component } from 'react';
import Icon from '../icon/icon';
import { AnimatePresence, motion} from 'framer-motion';

class MultiSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            selected: []
        }
    }
    select(item) {
        if(!this.state.selected.includes(item))
            this.setState({ selected: [...this.state.selected, item] });
        else this.setState({ selected: this.state.selected.filter(selected => selected.id !== item.id) });
    }
    hover(event, item){
        if(event.pressure > 0.4){
            this.select(item)
        }
    }
    render() { 
        return (  
            <div className={ styles.select }>
                <div className={ styles.main } onClick={() => this.setState({ open: !this.state.open  })}>
                    <span>{ this.props.name }</span>
                    <div className="flex items-center">
                        <span className="mr-3">{ this.state.selected.length > 0 ? this.state.selected.length : '' }</span>
                        <Icon name="down" size="10px"/>
                    </div>
                    
                </div>
                <AnimatePresence>
                    { this.state.open &&
                    <motion.div className="scrollable-300"
                    initial={{ opacity: 0, height: 0}} animate={{ opacity: 1,height: "auto"}} 
                    exit={{ opacity: 0, height: 0}}>
                    { this.props.data.map(item =>
                        <motion.div 
                        onHoverStart={e => this.hover(e, item)}
                        onTapStart={e => this.select(item)}
                        key={ item.id } 
                        className={ styles.item + " " + (this.state.selected.includes(item) ? (styles.selected + ' selected') : '')}
                        >
                            <this.props.layout {...item} checked={ this.state.selected.includes(item) }/>
                        </motion.div>
                    )}
                    </motion.div>
                    }
                </AnimatePresence>
                
            </div>
        );
    }
}
 
export default MultiSelect;