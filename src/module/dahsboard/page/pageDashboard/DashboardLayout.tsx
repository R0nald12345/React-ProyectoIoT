import { Outlet } from "react-router-dom";
import Sidebar from "../../components/componentesDashboard/Sidebar";
import Header from "../../components/componentesDashboard/Header";


const DashboardLayout = () => {
  return (
    <div className="h-screen flex">
      {/* Sidebar - ocupa toda la altura */}
      <Sidebar />
      
      {/* Área principal con Header y contenido */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />
        
        {/* Contenido principal con Outlet */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout
