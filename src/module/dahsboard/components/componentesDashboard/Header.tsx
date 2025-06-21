import { Link } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { RiChat1Fill } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";


const Header = () => {
  return (
    <header className="h-16 border-b border-gray-200 px-6 flex items-center justify-end bg-white shadow-sm">
      <nav className="flex items-center gap-2">
        <Menu
          menuButton={
            <MenuButton className="relative hover:bg-gray-100 p-2 rounded-lg transition-colors">
              <IoNotifications className="text-xl" />
              <span className="absolute -top-0.5 right-0 bg-red-500 text-white py-0.5 px-1.5 rounded-full text-xs font-bold">
                2
              </span>
            </MenuButton>
          }
          arrow={true}
          align="end"
          transition
          menuClassName="bg-white shadow-lg rounded-lg border p-4 min-w-[300px]"
        >
          <h1 className="text-gray-900 text-center font-medium mb-4">
            Notificaciones (3)
          </h1>
          <hr className="mb-4 border-gray-200" />

          {[1, 2, 3].map((item) => (
            <MenuItem key={item} className="p-0 hover:bg-transparent">
              <Link
                to="/"
                className="text-gray-700 flex items-center gap-4 py-2 px-4 hover:bg-gray-50 transition-colors rounded-lg w-full"
              >
                <RiChat1Fill className="p-2 bg-yellow-100 text-yellow-600 box-content rounded-full" />
                <div className="text-sm flex flex-col flex-1">
                  <div className="flex items-center justify-between">
                    <span>Nuevo comentario</span>
                    <span className="text-xs text-gray-500">21/10/2021</span>
                  </div>
                  <p className="text-gray-500 text-xs">
                    Ronald Camino ha comentado tu...
                  </p>
                </div>
              </Link>
            </MenuItem>
          ))}

          <hr className="my-4 border-gray-200" />

          <MenuItem className="p-0 hover:bg-transparent flex justify-center">
            <Link
              to="/"
              className="text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors"
            >
              Todas las notificaciones
            </Link>
          </MenuItem>
        </Menu>

        <Menu
          menuButton={
            <MenuButton className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors">
              <span className="font-bold text-gray-700">RONALD</span>
              <FaAngleDown className="text-gray-600" />
            </MenuButton>
          }
          arrow={true}
          align="end"
          transition
          menuClassName="bg-white shadow-lg rounded-lg border p-4 min-w-[200px]"
        >
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              className="rounded-lg transition-colors hover:bg-gray-50 flex items-center gap-4 py-2 px-4 w-full"
              to="/perfil"
            >
              <div className="flex flex-col gap-1 text-sm">
                <span className="font-semibold text-gray-700">CAMINO</span>
                <span className="text-xs text-gray-500">puma@gmail.com</span>
              </div>
            </Link>
          </MenuItem>
          
          <hr className="my-4 border-gray-200" />
          
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              className="rounded-lg transition-colors hover:bg-gray-50 flex items-center gap-4 py-2 px-4 w-full text-gray-700"
              to="/configuracion"
            >
              <IoMdSettings />
              <span>Configuración</span>
            </Link>
          </MenuItem>

          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              className="rounded-lg transition-colors hover:bg-red-50 flex items-center gap-4 py-2 px-4 w-full"
              to="/logout"
            >
              <RiLogoutCircleRLine className="text-red-600" />
              <span className="text-red-600 font-semibold">Cerrar Sesión</span>
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </header>
  );
};

export default Header;