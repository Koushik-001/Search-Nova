import './customInput.css';
import { AnimatePresence, motion } from 'framer-motion';

function CustomInput({Icon}) {
  return (
    <div className='searchBarWrapper'>
      <AnimatePresence initial={false}>
        <motion.div className='motionDiv'
        whileTap={{ scale: 0.95 }}
        >
          <Icon/>
          <motion.input placeholder='Search' whileTap={{ scale: 0.95 }} className='inputField'/>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default CustomInput