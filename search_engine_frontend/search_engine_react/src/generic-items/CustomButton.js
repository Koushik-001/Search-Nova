import { motion } from 'framer-motion'

function CustomButton({ icon: Icon = null, text='', size = 30, ...props }) {
  return (
    <motion.button {...props} className='customButton'>
      {Icon && <Icon stroke="currentColor" size={size} style={{ marginRight: text ? 8 : 0 }} />}
      {text && <span>{text}</span>}
    </motion.button>
  )
}

export default CustomButton
