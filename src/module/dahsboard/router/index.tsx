import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PageDashboard from "../page/PageDashboard";
import DashboardLayout from "../page/pageDashboard/DashboardLayout";

const VistaInicio     = lazy(() => import('../page/pageDashboard/PanelPrincipalPage'));   // si tienes una portada
const VistaEdificio   = lazy(() => import('../page/VistaEdificios/VistaEdificios'));

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
        path="Edificio"
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
