import { motion } from 'framer-motion'
import '../generic-items/genericItems.css'

function CustomInput({ Icon, customStyle = {} }) {
  return (
    <motion.div
      className="inputMainWrapper"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={customStyle}
    >
      <Icon />
      <motion.input
        type="text"
        placeholder="Search"
        className="inputField"
        whileTap={{ scale: 0.95 }}
      />
    </motion.div>
  )
}

export default CustomInput
