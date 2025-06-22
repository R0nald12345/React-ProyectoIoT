import { lazy, Suspense } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import PublicRoute from "./PublicRoute"
import { AuthProvider } from "../module/auth/hooks/useAuth"


const LoadingFallback = () => <div>Cargando....</div>
const IndexRoutes = () => {

  const DashboardRoutes = lazy(() => import("../module/dahsboard/router/index"))
  const ModuleAut = lazy(() => import("../module/auth/router"))
  const ModuleLadingPage = lazy(() => import("../module/ladingPage/page/PagePrincipal"))
  
  return (

    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<LoadingFallback />}>

          <Routes>
            {/* Rutas públicas */}
            <Route element={<PublicRoute />} >
              {/* Rutas de autenticación */}

              {/* <Route path="/auth/" element={<h1>InicioLogin</h1>} /> */}
              <Route index element={<ModuleLadingPage />} />
              <Route path="/auth/*" element={<ModuleAut />} />



            </Route>

            {/* Rutas protegidas */}
            {/* <Route element={<ProtectedRoute />}> */}
            <Route element={<PublicRoute />}>


              <Route path="/dashboard/*" element={<DashboardRoutes />} />

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