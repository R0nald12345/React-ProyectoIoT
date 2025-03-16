import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu"
import { FaAngleDown } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { RiChat1Fill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <header className='h-[7vh] md:h-[10vh] 
        border-b bg-gray-300 border-gray-200 border-2 p-8 flex items-center justify-end '>

        <Menu
          menuButton={
            <MenuButton className="relative  p-2 rounded-lg transition-colors">
              <IoNotifications />
              <span className="absolute -top-0.5 right-0  py-0.5 px-[5px] box-content bg-red-700 text-white rounded-full text-[8px] font-bold">
                2
              </span>
            </MenuButton>
          }
          arrow={true}
          align="end"
          transition
          menuClassName={"bg-white rounded-xl p-4"}
        >
          <h1 className="text-gray-900 text-center font-medium">
            Notificaciones (3)
          </h1>
          <hr className="my-6 border-gray-800" />

          <MenuItem className={"p-0 hover:bg-transparent"}>
            <Link
              to={"/"}
              className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-primary-100 transition-colors rounded-lg"
            >
              <RiChat1Fill className="p-2 bg-yellow-200 text-yellow-700 box-content rounded-full" />
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>Nuevo comentario</span>{" "}
                  <span className="text-[8px]">21/10/2021</span>
                </div>
                <p className="text-gray-500 text-xs">
                  Ronald Camino ah comentado tu...
                </p>
              </div>
            </Link>
          </MenuItem>

          <hr className="my-6 border-gray-800" />

          <MenuItem
            className={
              "p-0 hover:bg-transparent flex justify-center cursor-default"
            }
          >
            <Link
              to={"/"}
              className="text-gray-800 text-sm font-semibold transition-colors"
            >
              Todas las notificaciones
            </Link>
          </MenuItem>
        </Menu> 
        <Menu
            menuButton={
                <MenuButton className='flex items-center gap-x-2 p-2'>
                    <span className="font-semibold uppercase text-xl"> Usuario Registrado</span>
                    <FaAngleDown />
                </MenuButton>
            }
            arrow={true}
            align="end"
            transition
            menuClassName={"bg-white p-4"}
        >
            <MenuItem>
                <div className="flex flex-col">
                    <span className="text-sm font-semibold">Nombre Usuario</span>
                    <span className="text-xs text-gray-800 font-semibold">
                        correo
                    </span>
                </div>
            </MenuItem>
            <hr className="my-4 border-gray-700" />
            <MenuItem className={"p-0 hover:bg-transparent"}>
                <Link
                className="rounded-lg transition-colors hover:text-gray-300 hover:bg-gray-500 flex items-center gap-x-4 py-2 px-6 flex-1"
                to="/configuracion"
                >
                <IoMdSettings /> Configuracion
                </Link>
            </MenuItem>

          <MenuItem className={"p-0 hover:transparent font-bold"}>
            <Link
              className="rounded-lg transition-colors hover:text-white hover:bg-red-500/80 flex items-center gap-x-4 py-2 px-6 flex-1"
              to="/logout"
            >
              <RiLogoutCircleRLine className="text-red-600" />
              <p className="text-red-600 font-sem hover:text-white">
                Cerrar Sesion
              </p>
            </Link>
          </MenuItem> 

        </Menu>
    </header>
  )
}

export default DashboardHeader