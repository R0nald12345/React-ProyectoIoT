import React from 'react'
import {IconType} from 'react-icons'

interface datosProps{
    
    tittle:string;
    subTittle:string;
    image: string;
    logo:IconType;

}

const Card = ({tittle,subTittle,image,logo:IconComponent}:datosProps ) => {
  return (
    <>
        <section className=''>
            <img src={image} alt='imagen'/>

            <div className='bg-white'>
                <IconComponent className='text-white p-3 bg-blue-950 text-6xl'/>
                <h4 className='text-2xl font-bold'>{tittle}</h4>
                <p className='text-xl'>{subTittle}</p>

            </div>
        </section>
    </>
  )
}

export default Card