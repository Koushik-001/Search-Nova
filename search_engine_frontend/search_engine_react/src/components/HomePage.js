import Header from './header/Header'
import '../components/homePage.css'
import CustomInput from './customInputField/CustomInput'
import BodyComponent from './bodyComponent/BodyComponent'
import { Search } from 'lucide-react'
import { useRef } from 'react'
function HomePage() {
  const imgRef = useRef(null);
  return (
    <div >
      <img ref={imgRef} src={'./test.gif'} className='wallpaper' alt='wallpaper'/>
      <Header showTheme={false} showSettings={true} />
      <BodyComponent>
        <CustomInput Icon={Search} />
      </BodyComponent>
    </div>
  )
}

export default HomePage