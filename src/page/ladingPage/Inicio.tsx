
import { FaComputer } from "react-icons/fa6";
import Card from "../../components/ladingPage/Card";
import { FaServer } from "react-icons/fa";

const Inicio = () => {
  return (
    <>
      <section className='bg-[url("/portada.jpeg")] bg-center bg-cover h-screen w-full'>
        <h1 className=" uppercase text-4xl font-bold text-yellow-200">Internet de las Cosas</h1>
        <h3 className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at feugiat lorem.</h3>
      </section>

      <section className=" rounded-md py-5 bg-blue-950 flex items-center justify-evenly w-[70%] mx-auto">

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

      <section className="flex">

        <div className="w-1/2">imagen</div>

        <div className="w-1/2">
          ds
        </div>

      </section>

      <section className="bg-black">

        <h3 className=" p-5 text-white">Lorem Ipsun Lorem Ipsum</h3>

        <div className="mx-auto flex justify-evenly gap-5">
          <Card
            tittle={'Lorem Lorem'}
            subTittle={'kajsbdfkjhassdf kjhhasdlkf lkjahsdfhasdfkj lkajhsdfhjasdf'}
            image={'https://i.pinimg.com/736x/0f/72/57/0f7257b8d0bfe488a1a15448981fee06.jpg'}
            logo={FaServer}
          />

          <Card
            tittle={'Lorem Lorem'}
            subTittle={'kajsbdfkjhassdf kjhhasdlkfjhassd lkjahsdfhasdfkj lkajhsdfhjasdf'}
            image={'https://i.pinimg.com/736x/0f/72/57/0f7257b8d0bfe488a1a15448981fee06.jpg'}
            logo={FaServer}
          />

          <Card
            tittle={'Lorem Lorem'}
            subTittle={'kajsbdfkjhassdf kjhhasdlkfjhassdfjhasdfkj lkjahsdfhasdfkj lkajhsdfhjasdf'}
            image={'https://i.pinimg.com/736x/0f/72/57/0f7257b8d0bfe488a1a15448981fee06.jpg'}
            logo={FaServer}
          />
        </div>

      </section>
    
    </>
  )
}

export default Inicio