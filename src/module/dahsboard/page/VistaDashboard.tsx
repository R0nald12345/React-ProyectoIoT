import { Outlet } from "react-router-dom"
import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"

const VistaDashboard = () => {
  return (
    <section className="min-h-screen grid grid-cols-1 xl:grid-cols-6 justify-center items-center bg-center bg-cover bg-blend-overlay bg-black/50">
        VistaDashboard

        <Sidebar/>

        <section className="xl:col-span-5">
            <Header/>
        </section>

        <section>
            <Outlet/>
        </section>


    </section>
  )
}

export default VistaDashboard