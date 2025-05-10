import { Link, useLocation } from "react-router-dom"
import { IoCloseSharp } from "react-icons/io5";
import { SlMenu } from "react-icons/sl";
import { useState } from "react";

interface SidebarProps {
  sidebar: boolean;
}
const Sidebar = ({sidebar}:SidebarProps) => {
    
    // const location = useLocation();

    return (
        <>
        {/* Sidebar de ancho completo en la vista XL, con menú móvil en vistas más pequeñas */}
        <div
          className={`fixed lg:static w-[80%] md:w-[50%] lg:w-full bg-white top-0 z-50 h-full transition-all ${
          sidebar ? "-left-0" : "-left-full"
        } overflow-y-auto col-span-1 p-3 border-r`}
        >
          <div>
            <h3 className="text-center text-2xl font-bold mb-10">
              Panel Principal
            </h3>
  
            <ul className="">
              <li className="mb-3  px-3">
                <Link
                  to="/dashboard"
                  //  className={` 
                  //              ${location.pathname === "/dashboard" ? "bg-gray-400 text-white" : ""}`}
                >
                  <h3 className="font-bold text-xl">Inicio</h3>
                  <h4 className="font-semibold mt-2">Datos generales</h4>
                  <hr className="mt-2"/>
                </Link>
              </li>


              <li className="mb-3  px-3">
                <Link
                  to="/dashboard"
                  //  className={` 
                  //              ${location.pathname === "/dashboard" ? "bg-gray-400 text-white" : ""}`}
                >
                  <h3 className="font-bold text-xl">Edificios</h3>
                  <h4 className="font-semibold mt-2">Datos Edificios Generales</h4>
                  <hr className="mt-2"/>
                </Link>
              </li>
  
              
            </ul>
          </div>
          
          <nav>
            <button
              className="text-white flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-primary-900/50 transition-colors text-1xl font-semibold"
            >
              Cerrar Sesion
            </button>
          </nav>
        </div>
  
        
      </>
    );
  };

export default Sidebar