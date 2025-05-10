import { MdOutlineDashboard } from "react-icons/md";
import { RiAlignRight } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import Sidebar from "../layout/Sidebar"
import DashboardHeader from "../layout/DashboardHeader"
import PanelPrincipalPage from "./VistaInicio/PanelPrincipalPage"
import { useState, useEffect } from "react"
import { SlMenu } from "react-icons/sl"
import { IoCloseSharp } from "react-icons/io5"
import VistaEdificios from "./VistaEdificios/VistaEdificios";

const VistaDashboard = () => {
  // Estado para controlar la visibilidad del sidebar
  const [sidebar, setSidebar] = useState(false);




  return (
    <div className="h-screen overflow-hidden grid grid-cols-1 lg:grid-cols-6">
      
        <Sidebar 
          sidebar={sidebar}
        />
      

      <button 
        onClick={() => setSidebar(!sidebar)}
        className="block lg:hidden fixed bottom-4 right-4 bg-purple-600 p-2 text-white rounded-full text-2xl z-50"
      >
        {sidebar ? <IoMdClose /> : <RiAlignRight />}
      </button>



      {/* Contenido principal - margen izquierdo solo en pantallas XL */}
      <section className="bg-gray-200 col-span-5 overflow-y-auto h-full">
        {/* Header con botón de menú en pantallas pequeñas */}
        <DashboardHeader />
        <main className="p-5">
          {/* <PanelPrincipalPage /> */}
          <VistaEdificios/>

        </main>
        
       
      </section>
      
      {/* Botón flotante para mostrar/ocultar menú en vistas móviles */}
     


    </div>
  )
}

export default VistaDashboard