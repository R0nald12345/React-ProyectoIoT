import { Link } from "react-router-dom"

interface Props {
    ruta: string;
    nombre: string;
}



const ItemSidebar = ({ruta,nombre}:Props) => {
    return (
        <>
            <Link
                // to="/inicio"
                to = {ruta}
                className={` flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-primary-900/50 text-1xl font-semibold transition-colors
                                  ${location.pathname === "/" &&
                    "bg-primary-900/50 text-white"
                    }`}
            >
                {/* <FaRegChartBar className="text-primary" /> {nombre} */}
                {nombre}
            </Link>
        </>
    )
}

export default ItemSidebar