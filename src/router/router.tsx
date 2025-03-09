import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contacto, Inicio, Servicio } from '../page';
import Layout from '../presentation/ladingPage/layout/Layout';
import DashboardLayout from '../presentation/dashboard/layouts/DashboardLayout';
import PanelPrincipalPage from '../presentation/dashboard/pages/PanelPrincipal/PanelPrincipalPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicio" element={<Servicio />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>

        {/* Rutas del Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<PanelPrincipalPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}