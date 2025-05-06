import Header from '../layout/Header'
import { Outlet } from 'react-router-dom'

const PagePrincipal = () => {
    return (
        <>
            <Header/>
    
            <main className='mt-22'>
                <Outlet/>
            </main>
    
        </>
      )
    }
    


export default PagePrincipal