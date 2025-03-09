import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Layout = () => {
  return (
    <>
        <Header/>

        <main className='mt-22'>
            <Outlet/>
        </main>

    </>
  )
}

export default Layout