import { lazy, Suspense } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import PublicRoute from "./PublicRoute"
import ProtectedRoute from "./ProtectedRoute"
import { AuthProvider } from "../module/auth/hooks/useAuth"
import DashboardLayout from "../presentation/dashboard/layouts/DashboardLayout"
import PanelPrincipalPage from "../presentation/dashboard/pages/PanelPrincipal/PanelPrincipalPage"
import PageLoadingPage from "../module/ladingPage/page/PageLoadingPage"
import PageServicio from "../module/ladingPage/page/PageServicio"
import PageContacto from "../module/ladingPage/page/PageContacto"
import PagePrincipal from "../module/ladingPage/page/PagePrincipal"




const LoadingFallback = () => <div>Cargando....</div>
const IndexRoutes = () => {

  // const DashboardRoutes = lazy(() => import("../module/dahsboard/page/VistaDashboard"))


  return (

    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* Rutas públicas */}
            <Route element={<PublicRoute />} >
              {/* Rutas de autenticación */}
              <Route path="/auth/" element={<h1>InicioLogin</h1>} />
              
              {/* Rutas del landing page */}
              <Route element={<PagePrincipal/>}>
                <Route path="/" element={<PageLoadingPage />} />
                <Route path="/servicio" element={<PageServicio/>} />
                <Route path="/contacto" element={<PageContacto/>} />
              </Route>
            </Route>

            {/* Rutas protegidas */}
            <Route element={<ProtectedRoute />}>
              {/* <Route path="/dashboard" element={<DashboardRoutes />} /> */}
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<PanelPrincipalPage />} />
              </Route>
            </Route>

            {/* Ruta por defecto */}
            <Route path="*" element={<Navigate to="/auth/login" replace />} />
          </Routes>
        </Suspense>
      </AuthProvider>
    </BrowserRouter>

  )
}

export default IndexRoutes