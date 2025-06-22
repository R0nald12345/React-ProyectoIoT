import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../page/pageDashboard/DashboardLayout";

const VistaInicio     = lazy(() => import('../page/pageDashboard/PanelPrincipalPage'));   // si tienes una portada
const VistaEdificio   = lazy(() => import('../components/componentesVistaEdificio/VistaEdificios'));

const Loading = () => <div>Loading...</div>;

const DashboardRoutes = () => (
  <Routes>
    {/* ---------- RUTA PADRE CON LAYOUT ---------- */}
    <Route
      path="/"
      element={
        <Suspense fallback={<Loading />}>
          {/* <PageDashboard/> */}
          <DashboardLayout/>
        </Suspense>
      }
    >
    <Route
          index
          element={
            <Suspense fallback={<Loading />}>
              <VistaInicio />
            </Suspense>
          }
        />


      {/* hija  →  /dashboard/postulantes */}
      <Route
        path="edificio"
        element={
          <Suspense fallback={<Loading />}>
            <VistaEdificio/>
          </Suspense>
        }
      />
    </Route>
  </Routes>
);

export default DashboardRoutes;
