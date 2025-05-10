
import { BrowserRouter } from "react-router-dom"
import VistaDashboard from "./module/dahsboard/page/PageDashboard"
import IndexRoutes from "./routes"
import PageLoadingPage from "./module/ladingPage/page/PageLoadingPage"
import PagePrincipal from "./module/ladingPage/page/PagePrincipal"

function App() {

  return (
    <>


      {/* <IndexRoutes/> */}
      <BrowserRouter>
        <VistaDashboard/>
        {/* <PageLoadingPage/> */}

        {/* <PagePrincipal/> */}
      </BrowserRouter>


      

    </>
  )
}

export default App
