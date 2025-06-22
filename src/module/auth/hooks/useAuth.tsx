import { createContext, ReactNode, useContext, useState } from "react";
import { AuthResponse, LoginPayload, RegisterPayload, User } from "../types/auth.types";
import Swal from "sweetalert2";
import { authService } from "../service/authService";

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (payload: LoginPayload) => Promise<void>;
    register: (payload: RegisterPayload) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const login = async (payload: LoginPayload) => {
        try {
            setIsLoading(true);
            const response: AuthResponse = await authService.login(payload);

            if (response && response.success) {
                localStorage.setItem('token', response.token);
                localStorage.setItem('nombre', response.data.nombre_completo);
                localStorage.setItem('rol', response.data.rol);
                setUser(response.data);

                Swal.fire({
                    icon: 'success',
                    title: '¡Bienvenido!',
                    text: `Has iniciado sesión como ${response.data.nombre_completo}`,
                });
            } else {
                // Si success es false, lanzamos un error para que sea capturado por el catch
                throw new Error(response.message || "Credenciales incorrectas");
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Credenciales Incorrectos o Vacías!";
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: errorMessage,
            });
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const register = async (payload: RegisterPayload) => {
        try {
            setIsLoading(true);
            await authService.register(payload);
            Swal.fire({
                icon: 'success',
                title: 'Registro exitoso',
                text: 'Tu cuenta ha sido creada correctamente',
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error en el registro',
                text: error instanceof Error ? error.message : 'Error inesperado',
            });
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('nombre');
        localStorage.removeItem('rol');
    };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Hook para obtener el contexto de autenticación
 *
 * Lanza un error si no se encuentra dentro de un proveedor de autenticación
 *
 * @returns {AuthContextType} El objeto del contexto de autenticación
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};