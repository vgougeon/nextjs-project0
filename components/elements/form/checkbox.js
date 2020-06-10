import Icon from "../icon/icon";
import { AnimatePresence , motion} from "framer-motion";

const CheckBox = (props) => {
    return (  
        <div className={"check-item " + props.className }>
            <AnimatePresence>
            { props.checked && 
            <motion.div initial={{ opacity: 0, y: 10}} animate={{ opacity: 1, y: 0}} exit={{ opacity: 0, y: 10}}
            className="check-item-checked">
                <Icon name="check" size="16px"></Icon>
            </motion.div>
            }
            </AnimatePresence>
        </div>
    );
}
 
export default CheckBox;