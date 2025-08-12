import { Cog } from 'lucide-react'
import '../header/header.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import CustomModal from '../generic-items/CustomModal';

function CustomSetting() {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <div className="settingMainWrapper">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95, rotate: showMenu ? -90 : 90 }}
        onClick={() => setshowMenu(!showMenu)}
        className="settingsButton"
      >
        <Cog stroke="currentColor" size={30} />
      </motion.button>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ scaleY: 0, opacity: 0, transformOrigin: "top" }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0, transformOrigin: "top" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ position: 'absolute', top: '5%', right: '0.5%' }}
          >
            <CustomModal>
              hello this is a custom modal
            </CustomModal>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CustomSetting
