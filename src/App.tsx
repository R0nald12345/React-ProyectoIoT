
import { BrowserRouter } from "react-router-dom"
import VistaDashboard from "./module/dahsboard/page/PageDashboard"
import IndexRoutes from "./routes"

function App() {

  return (
    <>


      {/* <IndexRoutes/> */}
      <BrowserRouter>
        <VistaDashboard/>
      </BrowserRouter>


      

    </>
  )
}

export default App
