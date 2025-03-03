import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contacto, Inicio, Servicio } from '../page';
import Layout from '../layouts/Layout';
import DashboardLayout from '../presentation/dashboard/layouts/DashboardLayout';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} index />
          <Route path="/servicio" element={<Servicio />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />} />
      </Routes>
    </BrowserRouter>
  );
}