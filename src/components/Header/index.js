import { useHistory } from "react-router-dom"
import { CustomAiOutlineShoppingCart, CustomHeader } from "./style"
import { useSelector } from "react-redux"

const Header = () =>{
    const history = useHistory()
    const {cart} = useSelector(store => store)

    const goToCart = () =>{
        history.push('/cart')
    }

    const goToHome = () =>{
        history.push('/')
    }

    return (
        <>
        <CustomHeader>
            <h1 onClick={goToHome}>Kenzie Shop</h1>
            <button onClick={goToCart}>
                {cart.length > 0 && <div>{cart.length}</div>}
                <CustomAiOutlineShoppingCart/>
                Carrinho
            </button>
        </CustomHeader>
        </>
    )
}

export default Header