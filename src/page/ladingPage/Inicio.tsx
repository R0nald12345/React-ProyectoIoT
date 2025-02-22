
import { FaComputer } from "react-icons/fa6";
import Card from "../../components/ladingPage/Card";
import { FaServer } from "react-icons/fa";
import { CgCalendarDates } from "react-icons/cg";
import { IoIosInformationCircle } from "react-icons/io";
import CardsGeneral from "../../components/ladingPage/CardsGeneral";

const Inicio = () => {
  return (
    <section className="relative w-full h-screen">

      <section className='bg-[url("https://logisber.com/contenido/subidas/2025/01/el-impacto-del-internet-de-las-cosas-iot-en-la-gestion-de-la-cadena-de-suministro.jpg")] bg-center bg-cover w-full object-cover h-[100%]'>
        <h1 className="text-center pt-3 uppercase text-5xl font-extrabold text-yellow-200">Internet de las Cosas</h1>
        {/* <h3 className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at feugiat lorem.</h3> */}
      </section>

      <section className="rounded-md py-5 bg-blue-800 
        flex items-center justify-evenly w-[70%] mx-auto absolute top-[98%] left-[15%]">

        <div className="flex items-center gap-3">
          <FaComputer className="text-white text-3xl"/>
          <p className="text-white font-bold text-2xl">
            Loremm
          </p>
        </div>

        <div className="flex items-center gap-3">
          <FaComputer className="text-white text-3xl"/>
          <p className="text-white font-bold text-2xl">
            Loremm
          </p>
        </div>

        <div className="flex items-center gap-3">
          <FaComputer className="text-white text-3xl"/>
          <p className="text-white font-bold text-2xl">
            Loremm
          </p>
        </div>

        <div className="flex items-center gap-3">
          <FaComputer className="text-white text-3xl"/>
          <p className="text-white font-bold text-2xl">
            Loremm
          </p>
        </div>
        
      </section>

      <section className="flex mt-25 w-[75%] mx-auto gap-5">

        <div className="w-1/2">
          <img 
            src="https://news.america-digital.com/wp-content/uploads/2023/03/El-auge-de-la-adopcion-de-IoT-todo-lo-que-necesitas-saber.jpg" 
            alt="imagen"
          />
        </div>

        <div className="w-1/2">
          <div className="flex">
            <CgCalendarDates className="text-3xl"/>
             <p className="text-2xl text-blue-900 font-semibold">
                lorem lorem lorem
            </p>

          </div>
          <h3 className="text-5xl font-semibold mt-3">Lorem ipsum, consectetur adipiscing elit</h3>
          <p className="font-semibold mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at feugiat lorem. Proin sed sollicitudin lacus. Donec finibus at eros ac hendrerit. Mauris fringilla ligula augue, at molestie ligula hendrerit nec. Praesent pellentesque, massa eget posuere mollis, lacus massa ultricies justo, et maximus lectus magna et neque. 
          </p>
        </div>

      </section>

      <section className="mt-15 bg-black p-10">

        <div className="flex items-center gap-2">
          <IoIosInformationCircle className="text-blue-400 text-5xl" />
          <h3 className=" text-white font-bold text-2xl">Lorem Ipsun Lorem Ipsum</h3>

        </div>

        <div className="mx-auto flex justify-evenly gap-10 mt-5">
        
       

          <CardsGeneral/>
        </div>

      </section>
    
    </section>
  )
}

export default Inicio