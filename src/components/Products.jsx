import { useContext } from "react"
import { AppContext } from "../store/store"
const Products = () => {
    const data = useContext(AppContext);
    console.log("Products => " , data[0][0])
  return (
    <div>
      <h1>dg</h1>
    </div>
  )
}

export default Products
