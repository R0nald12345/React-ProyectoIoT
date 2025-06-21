
import { BrowserRouter } from "react-router-dom"
import VistaDashboard from "./module/dahsboard/page/PageDashboard"
import IndexRoutes from "./routes"
import PageLoadingPage from "./module/ladingPage/page/PageLoadingPage"
import PagePrincipal from "./module/ladingPage/page/PagePrincipal"
import PageLogin from "./module/auth/page/PageLogin"
import PagePlanes from "./module/ladingPage/page/PagePlanes"

import PageDashboard from "./module/dahsboard/page/PageDashboard"

function App() {

  return (
    <>


      {/* <IndexRoutes/> */}
      {/* <BrowserRouter>
        {/* <VistaDashboard/> */}
      
        {/* <PageLoadingPage/> */}

        {/* <PagePrincipal/> */}
      {/* </BrowserRouter>  */}
        {/* <PageLogin/> */}
      
        <IndexRoutes/>

        {/* <PagePlanes/> */}
        {/* <PageDashboard/> */}
        
    </>
  )
}

export default App
