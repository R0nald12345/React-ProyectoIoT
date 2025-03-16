import React from 'react'
import { NavLink } from 'react-router-dom';

interface Props{

    to: string;
    icon: string;
    title: string;
    description: string;

}

const SidebarMenuItem = ({to,icon,title,description}:Props) => {

  return (

    // <NavLink
    //   key={to}
    //   to={to}
    //   className={({isActive}) => 
    //       isActive
    //       ? 'flex justify-center items-center bg-blue-800 rouded-md mt-3'
    //       : 'flex justify-center items-center bg-blue-900 rouded-md mt-3'
    //   }
    // >
    //   <div className='flex flex-col p-3'>
    //     <span className={`${icon} text-2xl mr-4 font-semibold text-white`}>{title} </span>
    //     <span className='text-white'>{description} </span>
    //   </div>
      
    // </NavLink>

    <a
      key={to}
      // to={to}
      // className={({isActive}) => 
      //     isActive
      //     ? 'flex justify-center items-center bg-blue-800 rouded-md mt-3'
      //     : 'flex justify-center items-center bg-blue-900 rouded-md mt-3'
      // }
    >
      <div className='flex flex-col p-3'>
        <span className={`${icon} text-2xl mr-4 font-semibold `}>{title} </span>
        <span className=''>{description} </span>
      </div>
      
    </a>

  )
}

export default SidebarMenuItem