import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';

const DashboardLayout = () => {
  return (
    <div className='flex w-full h-screen'>
      <section className=' w-[13%] h-full'>
        <DashboardSidebar />
      </section>
      <section className='flex flex-col w-[87%]'>
        <DashboardHeader />
        <main className='bg-gray-200/60 h-full w-full p-6'>
          <Outlet />
        </main>
      </section>
    </div>
  );
};

export default DashboardLayout;