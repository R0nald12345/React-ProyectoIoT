import { FaComputer } from "react-icons/fa6";
import { CgCalendarDates } from "react-icons/cg";
import { IoIosInformationCircle } from "react-icons/io";
import CardsGeneral from "../../../components/ladingPage/CardsGeneral";
import { Contacto } from "../../../page";
import Contact from "./ComponentContact.tsx/Contact";
import ComponentSolution from "./ComponentSolution/ComponentSolution";
import ComponentBenefit from "./ComponentBenefit.tsx/ComponentBenefit";
import ComponentService from "./ComponentServices/ComponentService";

const Inicio = () => {
  return (
    <div className="">
      {/* Sección principal */}
      <section className='bg-[#0A2540] py-48 flex justify-center items-center'>
        <section className="flex w-[90%] gap-16">
          <div className="w-[50%] p-5" >
            <p className="text-custom-orange text-xl uppercase">Innovación Tecnológica</p>
            <h1 className="text-center pt-3 text-6xl font-bold text-white">Transformamos su Industria con IA e ioT</h1>
            <p className="text-gray-400 text-xl mt-8 text-center">Optimizamos sus operaciones mediante solcuiones inteligentes que integran IA con sistemas IoT, maximiazando las eficianeica y reduciendo costos.</p>
            <div className="mt-10 flex justify-evenly">
              <button className="bg-[#FF6D00] py-3 px-4 text-xl rounded-md">Solicitar consulta</button>
              <button className="bg-[#1976D2] py-3 px-4 text-xl text-white rounded-md">Solicitar consulta</button>
            </div>

            <section className="flex mt-10 justify-evenly">
              <div className="">
                <p className="text-yellow-600 text-5xl font-bold">45%</p>
                <p className="text-gray-300 text-2xl">Reducción de Costos</p>
              </div>
              <div className="">
                <p className="text-yellow-600 text-5xl font-bold">98%</p>
                <p className="text-gray-300 text-2xl">Presición en IA</p>
              </div>
              <div className="">
                <p className="text-yellow-600 text-5xl font-bold">24/7</p>
                <p className="text-gray-300 text-2xl">Monitoreo</p>
              </div>
            </section>
          </div>

          <div className="w-[50%] bg-yellow-600">
            <img className='bg-[url("https://logisber.com/contenido/subidas/2025/01/el-impacto-del-internet-de-las-cosas-iot-en-la-gestion-de-la-cadena-de-suministro.jpg")] bg-center bg-cover w-full object-cover h-[100%]'/>
          </div>
        </section>        
      </section>

      <div>

      </div>


      <div>
        <ComponentBenefit/>
      </div>

      <div>
        <ComponentService/>
      </div>

      <div>
        <ComponentSolution/>
      </div>

      {/* Sección de contacto con margen superior claro */}
      <div className="">
        <Contact />
      </div>
    </div>
  );
};

export default Inicio;