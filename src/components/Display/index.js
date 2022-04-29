import { useSelector } from "react-redux"
import Card from "../Card"
import { Ul } from "./style"

const Display = () =>{

    const {products} = useSelector(store => store)

    return(
        <Ul>
            {products.map((product) =>  
                <Card key={product.id} product={product}/>
            )}
        </Ul>
    )
}

export default Display