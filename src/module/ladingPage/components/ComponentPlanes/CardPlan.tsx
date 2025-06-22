//import { Plan } from "../../../types/suscripcion.types";

import { Plan } from "../../types/suscripcion.types";

interface CardPlanProps {
    plan: Plan;
}

const CardPlan = ({ plan }: CardPlanProps) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
            <h3 className="text-2xl font-bold text-center mb-4">{plan.nombre_plan}</h3>
            <p className="text-gray-600 mb-4 h-32">{plan.descripcion}</p>
            <ul className="mb-6">
                <li className="flex items-center mb-2">
                    <span className="font-bold mr-2">Edificios:</span> {plan.limite_edificios}
                </li>
                <li className="flex items-center">
                    <span className="font-bold mr-2">Usuarios:</span> {plan.limite_usuarios}
                </li>
            </ul>
            <button className="mt-auto bg-[#FF6D00] hover:bg-[#ff8c00] text-white font-bold py-2 px-4 rounded">
                Seleccionar Plan
            </button>
        </div>
    );
};

export default CardPlan; 