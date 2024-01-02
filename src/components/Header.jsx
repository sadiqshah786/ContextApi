
import { useContext } from "react"
import { AppContext } from "../store/store"

const MainHeader = () => {

    const data = useContext(AppContext)
    const userData =  data[1]
    
  return (
    <div className="header">
      <h2>Logo</h2>
      <div className="flex">
        <p>{userData.name}</p>
        <img src={userData.profile} alt="" />
        </div>    

      
    </div>
  )
}


export default MainHeader
