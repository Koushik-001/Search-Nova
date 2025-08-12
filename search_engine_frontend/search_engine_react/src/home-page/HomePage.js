import Header from '../header/Header'
import '../home-page/homePage.css'

function HomePage() {
  return (
    <div className='mainWrapper'>
      <img src={'./background.gif'} alt="wallpaper" className='backgroundWrapper'/>
      <Header/>
    </div>
  )
}

export default HomePage