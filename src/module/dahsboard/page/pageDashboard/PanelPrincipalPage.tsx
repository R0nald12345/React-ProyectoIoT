import CardsDashboard from '../../components/componentesPageInicio/CardsDashboard';
import ventilador from '../../../../../public/Ventilador.png'
import GraficoEstadistico from '../../components/componentesPageInicio/GraficoEstadistico';
import BarraEstadistico from '../../components/componentesPageInicio/BarraEstadistico';
import CircularEstadistico from '../../components/componentesPageInicio/CirularEstadistico';
import GraficaLinea from '../../components/componentesPageInicio/GraficaLinea';

const PanelPrincipalPage = () => {

  return (
    <div className="text-white">
      <p className='text-3xl font-semibold text-black'>Dashboard</p>
    {/* Superior */}
      <section className='flex gap-5 mt-5'>

        <section className='w-[60%]'>

          <GraficaLinea/>

          {/* <div className='flex justify-evenly gap-5'>
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


          </div> */}


      
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