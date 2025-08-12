import Header from '../header/Header'
import '../home-page/homePage.css'
import SearchBar from '../search-bar/SearchBar'

function HomePage() {
  return (
    <div className='mainWrapper'>
      <img src={'./background.gif'} alt="wallpaper" className='backgroundWrapper'/>
      <Header/>
      <SearchBar/>
    </div>
  )
}

export default HomePage