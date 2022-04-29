import {Switch, Route} from "react-router-dom"
import CartPage from "../Pages/Cart"
import Home from "../Pages/Home"

const Routes = () =>{
    return(
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/cart'>
                <CartPage/>
            </Route>
        </Switch>
    )
}

export default Routes