import { create } from 'zustand'

interface ClienteIdStore {
  clienteId: number | null
  setClienteId: (id: number| null) => void
  clearClienteId: () => void
  rolId:number| null
  setRolId: (id: number| null) => void
}

/*export const useClienteIdStore = create<ClienteIdStore>((set) => ({
  clienteId: null,
  rolId: null,
  setClienteId: (id: number | null) => set({ clienteId: id }), // <- Acepta null
  setRolId:(id:number|null ) => set({rolId:id}),
  clearClienteId: () => set({ clienteId: null })

})) */

  export const useClienteIdStore = create<ClienteIdStore>((set) => ({
    clienteId: Number(localStorage.getItem("clienteId")) || null,
    rolId: Number(localStorage.getItem("rolId")) || null,
    setClienteId: (id: number | null) => {
      if (id) localStorage.setItem("clienteId", String(id));
      else localStorage.removeItem("clienteId");
      set({ clienteId: id });
    },
    setRolId: (id: number | null) => {
      if (id) localStorage.setItem("rolId", String(id));
      else localStorage.removeItem("rolId");
      set({ rolId: id });
    },
    clearClienteId: () => {
      localStorage.removeItem("clienteId");
      localStorage.removeItem("rolId");
      set({ clienteId: null, rolId: null });
    }
  }));