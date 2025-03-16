import CardsDashboard from '../../Components/Dashboard/CardsDashboard';
import ventilador from '../../../../../public/Ventilador.png'
import GraficoEstadistico from '../../Components/Dashboard/GraficoEstadistico';
import BarraEstadistico from '../../Components/Dashboard/BarraEstadistico';
import CircularEstadistico from '../../Components/Dashboard/CirularEstadistico';

const PanelPrincipalPage = () => {



  return (
    <div className="text-white">
      <p className='text-3xl font-semibold text-black'>Dashboard</p>
    {/* Superior */}
      <section className='flex gap-5 mt-5'>

        <section className='w-[60%]'>

          <div className='flex justify-evenly gap-5'>
            <CardsDashboard
              title1="Fans"
              numberTitle1={27}
              title2="Power Consumition"
              numberTitle2={270}
              icono="/ventilador.svg"
            />
            <CardsDashboard
              title1="Fans"
              numberTitle1={27}
              title2="Power Consumition"
              numberTitle2={270}
              icono="/ventilador.svg"
            />

          </div>

          <div className='flex gap-5 mt-5'>
            <CardsDashboard
              title1="Fans"
              numberTitle1={27}
              title2="Power Consumition"
              numberTitle2={270}
              icono="/ventilador.svg"
            />
            <CardsDashboard
              title1="Fans"
              numberTitle1={27}
              title2="Power Consumition"
              numberTitle2={270}
              icono="/ventilador.svg"
            />


          </div>

      
        </section>

        <div className='w-[40%]'>
          <GraficoEstadistico
          />
        </div>
        
        
      </section>

      {/* Parte Inferior */}
      <section className='flex gap-5 mt-5'>

        <div className='w-[40%] '>
          {/* <BarraEstadistico/> */}
          <CircularEstadistico/>
        </div>

        <div className='w-[60%] h-full '>
          <BarraEstadistico/>
        </div>
      </section>
    </div>
  );
};

export default PanelPrincipalPage;