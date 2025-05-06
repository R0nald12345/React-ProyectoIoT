import React, { createContext, useContext, useState } from "react"
import Swal from "sweetalert2";
import { authService } from "../service/authService";
import { AuthResponse } from "../types/auth.types";

interface AuthContextType {
  user: AuthResponse['user'] | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email:string,  password:string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}


const AuthContext =  createContext<AuthContextType|null>(null);


export const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

 // Estado para almacenar el usuario autenticado
 const [user, setUser] = useState<AuthResponse['user'] | null>(null);
 // Estado para manejar la carga de las operaciones de autenticación
 const [isLoading, setIsLoading] = useState(false);




 const login = async (email: string, password: string) => {
  try {
    setIsLoading(true);
    const response = await authService.login({ email, password });

    if (response && response.user) {
      // Guardar token en localStorage
      localStorage.setItem('token', response.token);

      // Guardar nombre del usuario
      localStorage.setItem('userName', response.user.nombre || response.user.nombre);

      // Guardar datos del usuario en el estado
      setUser({
        ...response.user,
        nombre: response.user.nombre || response.user.nombre // Manejar ambos casos
      });

      Swal.fire({
        icon: 'success',
        title: '¡Bienvenido!',
        text: `Has iniciado sesión como ${response.user.nombre || response.user.nombre}`,
      });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Credenciales Incorrectos o Vacio!",
    });
    throw error; // Re-lanzamos el error para que pueda ser manejado por el componente
  } finally {
    setIsLoading(false);
  }
};

  const register = async (name: string, email: string, password: string) => {
    try {
      setIsLoading(true);
      await authService.register({ name, email, password });
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
    authService.logout();
    setUser(null);
  };


  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
    
  )

}


export const useAuth = ()=>{
  const context = useContext(AuthContext);
  if(!context){
    throw new Error('useAuth debe ser usado dentro de AuthProvider');
  }
  return context;
}