import { MdDashboard } from "react-icons/md";
import PanelPrincipalPage from "../pages/PanelPrincipal/PanelPrincipalPage";
import DispositivoPage from "../pages/Dispositivos/DispositivoPage";

export const menuItem = [
    {
        to: "/inicio",
        icon:   "fa-solid",
        title: "Panel Principal",
        description: "Datos generales",
        component: <PanelPrincipalPage/>
    },
    {
        to: "/dispositivos",
        icon:   "fa-solid",
        title: "Dispositivos",
        description: "Lista termostatos conectados",
        component: <DispositivoPage />
    },
    {
        to: "/estadisticas",
        icon:   "fa-solid",
        title: "Estadísticas",
        description: " Gráficos de temperatura",
        component: <MdDashboard />
    },
    {
        to: "/progrmacion",
        icon:   "fa-solid",
        title: "Programación",
        description: "Configuraciónes",
        component: <MdDashboard />
    },
    {
        to: "/alertas",
        icon:   "fa-solid",
        title: "Alertas",
        description: "Historial de Notificaciones",
        component: <MdDashboard />
    },
    {
        to: "/programacion",
        icon:   "fa-solid",
        title: "Programación ",
        description: "Configuraciónes Temperatura",
        component: <MdDashboard />
    },
    {
        to: "/informes",
        icon:   "fa-solid",
        title: "Informes",
        description: "Reportes Históricos",
        component: <MdDashboard />
    },
    {
        to: "/configuraciones",
        icon:   "fa-solid",
        title: "Configuraciones",
        description: "Ajutes General",
        component: <MdDashboard />
    },
    {
        to: "/usuarios",
        icon:   "fa-solid",
        title: "Usuarios",
        description: "Gestión de Accesos",
        component: <MdDashboard />
    },
    {
        to: "/soporte",
        icon:   "fa-solid",
        title: "Soporte",
        description: "Gestión de Contactos",
        component: <MdDashboard />
    },
]