// CardSolution.tsx
import { ReactNode } from 'react';

interface CardSolutionProps {
  icono: ReactNode; // Usamos ReactNode para permitir elementos JSX
  title: string;
  subTitle: string;
  datails1: string;
  datails2: string;
  datails3: string;
  bgColor?: string;
}

const CardSolution = ({
  icono, 
  title, 
  subTitle,
  datails1, 
  datails2, 
  datails3,
  bgColor = 'bg-white'
}: CardSolutionProps) => {
  return (
    <div className={`p-6 rounded-3xl shadow-md ${bgColor}`}  >
      <div className="text-4xl text-blue-600 mb-4 flex gap-5">
        {icono}
        <h3 className="text-2xl text-black font-bold mb-2 flex items-center">{title}</h3>
    </div>
      <p className="text-gray-600 mb-4">{subTitle}</p>

      <section className="flex gap-5">

          <p className="bg-white rounded-md py-2 px-3">{datails1} </p> 

          <p className="bg-white rounded-md py-2 px-3">{datails2}</p> 

          <p className="bg-white rounded-md py-2 px-3">{datails3}</p> 

      </section>

    </div>
  );
};

export default CardSolution;