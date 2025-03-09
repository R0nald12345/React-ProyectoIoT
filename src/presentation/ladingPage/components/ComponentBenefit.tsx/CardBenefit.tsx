import { ReactNode } from 'react';

interface Props {
  icono: ReactNode; // Usamos ReactNode para permitir elementos JSX
  title: string;
  subTitle: string;
  bgColor:string;
  colorTitle:string;
  colorSubTitle:string
}

const CardBenefit = ({icono,title,subTitle,bgColor,colorTitle,colorSubTitle}:Props) => {
  return (
    <>
        <section className={`rounded-md shadow-2xl p-10 ${bgColor}`}>
            {icono}
            <h4 className={`font-bold text-2xl mt-3 ${colorTitle} `}>
                {title}
            </h4>

            <p className={`${colorSubTitle} mt-3`}>
                {subTitle}
            </p>

        </section>
    </>

  )
}

export default CardBenefit