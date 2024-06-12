import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Pagenotfound from "./feature/Pagenotfound";
import Home from "./feature/Home";
import Register from "./feature/Register";
import Productlist from "./feature/Productlist";
import Login from "./feature/Login";
import Cart from "./feature/Cart";
 
 

const router = createBrowserRouter([
    {
        path: "/", element: <App />,
        children: [
            {path:'', element:<Home/>},
            {path:"login",element:<Login/>},
            {path:"register",element:<Register/>},
            {path:"products",element:<Productlist/>},
            {path:"cart",element:<Cart/>},
        ] },
        {path:'*' , element:<Pagenotfound/>}
])

export default router