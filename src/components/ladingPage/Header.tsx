import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header>
        <section className='flex bg-black w-full py-2'>

          <h3 className='w-[30%] text-white uppercase font-bold text-3xl ml-20'>IOT</h3>

          <nav className='w-[70%] flex items-center justify-evenly gap-5 '>
            
            <NavLink to='/' className='text-white font-semibold text-xl'>Inicio</NavLink>

            <NavLink to='/servicio' className='text-white font-semibold text-xl'>Servicio</NavLink>

            <NavLink to='/contacto' className='text-white font-semibold text-xl'>Contacto</NavLink>

            <NavLink to='/' className='text-white font-semibold text-xl'>Iniciar Sesion</NavLink>

          </nav>

        </section>
      </header>
    </>
  )
}

export default Header