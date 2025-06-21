import { Navigate, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"

const Login = lazy(() => import('../page/PageLogin'))
const Register = lazy(() => import('../page/PageRegister'))
 


// Componente de carga
const LoadingComponent = () => <div>Cargando...</div>;

const AuthRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={
                <Suspense fallback={<LoadingComponent />}>
                    <Login/>
                </Suspense>
            } />
            
            <Route path="register" element={
                <Suspense fallback={<LoadingComponent />}>
                    <Register/>
                </Suspense>
            } />


            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}

export default AuthRoutes;