import { AnimatePresence, motion } from 'framer-motion'
import '../header/header.css'
import '../../App.css'
import { useState } from 'react'
import { Sun, Moon, MonitorCog,Cog } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const icons = [Sun, Moon, MonitorCog]
function Header({showTheme,showSettings}) {
  const navigate = useNavigate();
  const [index, setIndex] = useState(2)
  const IconComponent = icons[index]

  const getTheme = (i) => {
    if (i === 0) return 'theme-light'
    if (i === 1) return 'theme-dark'
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return isDark ? 'theme-dark' : 'theme-light'
  }
  const handleClick = () => {
    const nextIndex = (index + 1) % icons.length;
    setIndex(nextIndex);

    document.body.classList.remove('theme-light', 'theme-dark', 'theme-system');

    if (nextIndex === 0) {
      document.body.classList.add('theme-light');
    } else if (nextIndex === 1) {
      document.body.classList.add('theme-dark');
    } else {
      document.body.classList.add('theme-system');
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.body.classList.add(isDark ? 'theme-dark' : 'theme-light');
    }
  };

  const currentTheme = getTheme(index)
  const isDark = currentTheme === 'theme-dark'

  const staticLogo = isDark ? '/Search_dark.png' : '/Search.png'

  useEffect(() => {
    const theme = getTheme(index)
    document.body.classList.remove('theme-light', 'theme-dark', 'theme-system')
    document.body.classList.add(theme)
  }, [index])

  return (
    <div>
      <div className='header'>
        <div className="logo-wrapper">
          <img src={staticLogo} alt="search nova static" className="logo static" onClick={() => navigate('/home')} />
        </div>
        {showTheme &&  <AnimatePresence initial={false}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            onClick={handleClick}
            whileTap={{ scale: 0.95 }}
            className='icon-button '
          >
            <IconComponent stroke="currentColor" />
          </motion.button>
        </AnimatePresence>}

        {showSettings &&
        <AnimatePresence initial={false}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className='icon-button'
          >
                  <Cog stroke="currentColor" />
          </motion.button>
        </AnimatePresence>
        }
      </div>
    </div>
  )
}

export default Header
