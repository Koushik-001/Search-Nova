// CustomSetting.js
import { Cog } from 'lucide-react';
import '../header/header.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import CustomModal from '../generic-items/CustomModal';
import CustomButton from '../generic-items/CustomButton';

function CustomSetting({ onWallpaperChange }) {
  const [showMenu, setShowMenu] = useState(false);
  const fileInputRef = useRef(null);

  function editWallpaper() {
    fileInputRef.current.click();
  }

  function editTheme() {
    console.log("Editing theme...");
  }

  const settingsMenu = [
    { text: 'Wallpaper', functionality: editWallpaper },
    { text: 'Theme', functionality: editTheme },
    { text: 'Reset to Default', functionality:() => onWallpaperChange('./background.gif') }
  ];

  return (
    <div className="settingMainWrapper">
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            const imageUrl = URL.createObjectURL(file);
            onWallpaperChange(imageUrl);
          }
        }}
      />

      <CustomButton
        icon={Cog}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95, rotate: showMenu ? -90 : 90 }}
        onClick={() => setShowMenu(!showMenu)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2px'
        }}
      />

      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ scaleY: 0, opacity: 0, transformOrigin: 'top' }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0, transformOrigin: 'top' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{ position: 'absolute', top: '5%', right: '0.5%' }}
          >
            <CustomModal>
              {settingsMenu.map((item, index) => (
                <CustomButton
                  key={index}
                  text={item.text}
                  onClick={() => {
                    item.functionality();
                    setShowMenu(false);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'flex',
                    margin: '5px',
                    fontWeight: 'bold'
                  }}
                />
              ))}
            </CustomModal>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CustomSetting;
