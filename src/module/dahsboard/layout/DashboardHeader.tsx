import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu"
import { FaAngleDown } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { RiChat1Fill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <header className="h-[10vh] border-b border-gray-600 border-secondary-100 px-8 flex items-center justify-end bg-gray-300/70 w-full">
      <nav className="flex items-center gap-2">
        {/* Menú de usuario */}
        <Menu
          menuButton={
            <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-100 p-2 rounded-lg transition-colors">
              <span className="font-medium">Usuario</span>
              <FaAngleDown />
            </MenuButton>
          }
          arrow={true}
          align="end"
          transition
          menuClassName={"bg-white p-4"}
        >
          <MenuItem className={"p-0 hover:bg-transparent"}>
            <Link
              className="rounded-lg transition-colors hover:bg-primary-100/90 flex items-center gap-x-4 py-2 px-6 flex-1"
              to="/perfil"
            >
              <div className="flex flex-col gap-1 text-sm">
                <span className="text-sm font-semibold">Mi Perfil</span>
                <span className="text-xs text-gray-800 font-semibold">
                  usuario@ejemplo.com
                </span>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-4 border-gray-700" />
        </Menu>
      </nav>
    </header>
  );
};

export default DashboardHeader