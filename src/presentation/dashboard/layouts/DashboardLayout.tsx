import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';

const DashboardLayout = () => {
  return (
    <div className='flex w-full h-screen'>
      <section className='bg-blue-950 w-[13%] h-full'>
        <DashboardSidebar />
      </section>
      <section className='flex flex-col w-[87%]'>
        <DashboardHeader />
        <main className='bg-[url("https://logisber.com/contenido/subidas/2025/01/el-impacto-del-internet-de-las-cosas-iot-en-la-gestion-de-la-cadena-de-suministro.jpg")] bg-center bg-cover bg-no-repeat h-full w-full p-6'>
          <Outlet />
        </main>
      </section>
    </div>
  );
};

export default DashboardLayout;