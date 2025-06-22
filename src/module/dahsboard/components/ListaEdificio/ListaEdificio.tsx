import { Building } from "../../types/edificio.types";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";
import Swal from 'sweetalert2';
import ModalVerEdificio from "../componentesVistaEdificio/ModalVistaEdificios/ModalVerEdificio";
import { useState } from "react";

interface Props {
  edificio: Building;
  onDelete?: (id: string) => void;
  onEdit?: (edificio: Building) => void;
}

const ListaEdificio = ({ edificio, onDelete }: Props) => {

  const [openModalVer, setOpenModalVer] = useState(false);

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: `¿Deseas eliminar el edificio "${edificio.name}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed && onDelete) {
      try {
        await onDelete(edificio.id);
        Swal.fire(
          '¡Eliminado!',
          'El edificio ha sido eliminado correctamente.',
          'success'
        );
      } catch (error) {
        Swal.fire(
          'Error',
          'No se pudo eliminar el edificio.',
          'error'
        );
      }
    }
  };


  return (
    <>
      <ModalVerEdificio
        open={openModalVer}
        onClose={() => setOpenModalVer(false)}
        edificio={edificio}
      />
    
    
      <li className="w-full flex mt-5 rounded-2xl bg-white shadow-black ">

        <div className="w-[40%] px-3 py-4">
          <p className="font-medium">{edificio.name}</p>
        </div>

        <div className="w-[20%] flex justify-center items-center px-3">
          <p className="text-center">{edificio.floors[0]?.number || 0}</p>
        </div>

        <div className="w-[20%] flex justify-center items-center px-3">
          <p className="text-center">{edificio.floors[0]?.rooms[0]?.number || 0}</p>
        </div>

        <div className="w-[20%] flex justify-center items-center gap-3">
          <IoEyeSharp
            onClick={() => setOpenModalVer(true)}
            className="text-3xl p-1 rounded-xl bg-blue-950 text-white cursor-pointer"
          />
          <BiEditAlt
            // onClick={() => setOpen(!open)}
            className="text-3xl p-1 rounded-xl bg-green-900 text-white cursor-pointer"
          />


          {/* <div className='w-1/2 flex justify-end gap-2'> */}
          {/* <ImWhatsapp className="text-3xl text-green-600" /> */}
          <RiDeleteBin5Line
            onClick={handleDelete}
            className="text-3xl p-1 rounded-xl bg-red-700 text-white cursor-pointer hover:bg-red-800"
          />
        </div>
      </li>
    </>
  );
};

export default ListaEdificio;