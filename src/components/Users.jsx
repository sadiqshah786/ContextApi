
import { useContext } from "react"
import { AppContext } from "../store/store"

const Users = () => {
    const data = useContext(AppContext)
    console.log("Users=>", data[0][1])
  return (
    <div>
      Users
    </div>
  )
}

export default Users
