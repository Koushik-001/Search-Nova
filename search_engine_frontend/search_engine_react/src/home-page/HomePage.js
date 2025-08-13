import { useState } from 'react';
import Header from '../header/Header'
import '../home-page/homePage.css'
import SearchBar from '../search-bar/SearchBar'

function HomePage() {
  const [background, setBackground] = useState('./background.gif');
  return (
    <div className='mainWrapper'>
      <img src={background} alt="wallpaper" className='backgroundWrapper'/>
      <Header onWallpaperChange={setBackground}/>
      <SearchBar/>
    </div>
  )
}

export default HomePage