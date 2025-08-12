import { Search } from "lucide-react"
import CustomInput from "../generic-items/CustomInput"
import "../search-bar/searchBar.css"

function SearchBar() {
  return (
    <div className="searchMainWrapper">
        <img src={'./Search_dark.png'} alt="logo"/>
        <CustomInput Icon={Search} customStyle={{width:'20vw'}}/>
    </div>
  )
}

export default SearchBar