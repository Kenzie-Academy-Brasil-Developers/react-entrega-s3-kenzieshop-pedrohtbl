import { useDispatch, useSelector } from "react-redux";
import { addCartThunk } from "../../store/modules/cart/thunks";
import { Li } from "./style"

const Card = ({product}) =>{

    const dispatch = useDispatch()
    const {cart} = useSelector(state => state)

    const {id,src,name,price} = product
    
    const handleClick = () =>{
        const igual = cart.filter(product => product.id === id)
        !igual.length &&
        dispatch(addCartThunk(product))
    }

    return(
        <Li key={id} id={id}>
            <figure>
            <img src={src} alt={name}/>
            </figure>
            <div>
                <p>{name}</p>
                <span>R$ {price.toFixed(2)}</span>
            </div>
            <button onClick={handleClick}>Adicionar ao carrinho</button>
        </Li>
        
    )
}

export default Card