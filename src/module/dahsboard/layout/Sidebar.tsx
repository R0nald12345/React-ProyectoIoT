import { Link } from "react-router-dom"
import { IoCloseSharp } from "react-icons/io5";
import { SlMenu } from "react-icons/sl";
import { useState } from "react";

const Sidebar = () => {

    const [showMenu, setshowMenu] = useState(false);

    return (

        <>
            <div
                className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full  top-0 bg-green-800
                      p-4 flex flex-col justify-between z-50 ${showMenu ? "left-0" : "-left-full"
                    } transition-all`}
            >
                <div>

                    <h1 className="text-center text-2xl font-bold text-white mb-10">
                        Administración
                    </h1>

                    <ul className="text-white">
                        <li className="mb-3">
                            <Link
                                to="/inicio"
                                className={` flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-primary-900/50 text-1xl font-semibold transition-colors
                                  ${location.pathname === "/" &&
                                    "bg-primary-900/50 text-white"
                                    }`}
                            >
                                {/* <FaRegChartBar className="text-primary" /> Inicio */}
                            </Link>
                        </li>


                        <li className="mb-3"
                        //    onClick={() => navigate("servicioDistrital")}
                        >
                            <Link
                                to="/"
                                className=" flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-primary-900/50 text-1xl font-semibold transition-colors"
                            >
                                {/* <RiCustomerService2Fill  className="text-primary" />  */}
                                Servicio Distrital
                            </Link>
                        </li>
                    </ul>
                </div>

                <nav>
                    <button
                        //   onClick={handleLogout}
                        className="text-white flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-primary-900/50 transition-colors text-1xl font-semibold"
                    >
                        {/* <CiLogout className="text-primary" />  */}
                        Cerrar Sesion
                    </button>
                </nav>

            </div>

            <button
                //   onClick={() => setshowMenu(!showMenu)}
                className="xl:hidden fixed bottom-4 right-4 bg-green-900 text-black p-3 rounded-full z-50"
            >
                {showMenu ? <IoCloseSharp /> : <SlMenu />}
            </button>
        </>

    )

}

export default Sidebar