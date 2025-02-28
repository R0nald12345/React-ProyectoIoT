import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import { menuItem } from "./menuItem";

export const ItemRoute = createBrowserRouter([
    {
        path:"/",
        element:<DashboardLayout/>,
        children: [
            ...menuItem.map( (route)=>({
                path: route.to,
                element: route.component
            })),
            {
                //Por defecto en ser mostrado de los item del Sidebar 
                //de mi arreglo qujiero la posicion 0 que se muestre .[0]
                path:'',
                element: <Navigate to={menuItem[0].to}/>
            }
        ]
    }
])