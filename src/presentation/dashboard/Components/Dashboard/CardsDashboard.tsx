
interface Props{
    title1:string;
    numberTitle1: number;
    title2: string;
    numberTitle2: number;
    icono:string;
}
const CardsDashboard = ({ title1, numberTitle1, title2, numberTitle2, icono }: Props) => {
  console.log("Props recibidos en CardsDashboard:", { title1, numberTitle1, title2, numberTitle2, icono });

  return (
    <section className="flex bg-white/85 text-black py-5 px-8 w-full rounded-md">

      <section className="w-[60%]">
        
        <div className="font-bold">
          <p className="text-gray-600" >{title1}</p>
          <p className="text-2xl">{numberTitle1}</p>
        </div>

        <div className="font-bold">
          <p className="text-gray-600">{title2}</p>
          <p className="text-2xl">{numberTitle2}</p>
        </div>

      </section>

      <div className="w-[40%] flex justify-center items-center">
        <img src={icono} alt="Icono" className="w-24 h-24 object-contain"/>
      </div>


    </section>
  );
};
export default CardsDashboard