import { RiAlignRight } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { FaSheetPlastic } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const location = useLocation();         
  const pathname = location.pathname;  

  const menuItems = [
    { icon: MdDashboard, text: "Dashboard", path: "" },
    { icon: FaPeopleGroup, text: "Postulantes", path: "postulantes" },
    { icon: IoPeople, text: "Estudiantes", path: "/dashboard/estudiantes" },
    { icon: FaChalkboardTeacher, text: "Docentes", path: "/dashboard/docentes" },
    { icon: FaSheetPlastic, text: "Papeleta", path: "/dashboard/papeleta" }
  ];

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed lg:static w-[280px] lg:w-[280px] top-0 z-50 h-full transition-all duration-300 ${sidebar ? "left-0" : "-left-full lg:left-0"
          } bg-blue-900 text-white flex flex-col border-r border-blue-800`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-blue-800">
          <h1 className="text-2xl font-bold text-center">LOGO</h1>
        </div>

        {/* Menu */}
        <nav className="flex-1 py-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isActive =
                (item.path === "" && pathname === "/dashboard") ||
                pathname === `/dashboard/${item.path}`;

              return (
                <li key={index}>
                  <Link
                    to={item.path} // NO usar `/dashboard/postulantes`, solo `postulantes`
                    className={`flex items-center px-6 py-3 text-lg transition-colors hover:bg-blue-800 ${isActive ? "bg-blue-800 border-r-4 border-blue-400" : ""
                      }`}
                    onClick={() => setSidebar(false)}
                  >
                    <Icon className="text-xl" />
                    <span className="ml-3">{item.text}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Botón toggle para mobile */}
      <button
        onClick={() => setSidebar(!sidebar)}
        className="lg:hidden fixed top-4 left-4 bg-blue-900 p-2 text-white rounded-lg text-xl z-50 shadow-lg"
      >
        {sidebar ? <IoMdClose /> : <RiAlignRight />}
      </button>

      {/* Overlay para mobile */}
      {sidebar && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebar(false)}
        />
      )}
    </>
  );
};

export default Sidebar;