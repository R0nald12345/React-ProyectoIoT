import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Usuario {
  id: number;
  nombre_completo: string;
  email: string;
  rol: string;
  cliente_id: number | null;
  activo: boolean;
}

interface UsuarioStore {
  usuario: Usuario | null;
  setUsuario: (usuario: Usuario) => void;
  clearUsuario: () => void;
}

export const useUsuarioStore = create<UsuarioStore>()(
  persist(
    (set) => ({
      usuario: null,
      setUsuario: (usuario: Usuario) => set({ usuario }),
      clearUsuario: () => set({ usuario: null }),
    }),
    { name: 'usuario-store' }
  )
);