import React from 'react'
import CustomSetting from './CustomSetting'

function Header({ onWallpaperChange }) {
  return (
    <div className='headerMainWrapper'>
        <CustomSetting onWallpaperChange={onWallpaperChange}/>
    </div>
  )
}

export default Header