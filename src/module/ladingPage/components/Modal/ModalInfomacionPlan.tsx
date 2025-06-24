import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import clienteService from "../../service/clienteService";
import { CreateClientePayload } from "../../types/cliente.types";
import { useNavigate } from "react-router-dom";
import { useClienteIdStore } from "../../../../store/useClienteIdStore";

interface Props {
  open: boolean;
  onClose: () => void;
  planId: number;
}

const ModalInformacionPlan = ({ open, onClose, planId }: Props) => {
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [loading, setLoading] = useState(false);
  //const [clienteId, setClienteId] = useState<number | null>(null);
  const [pagoUrl, setPagoUrl] = useState<string | null>(null);
  const [loadingPago, setLoadingPago] = useState(false);

  const { setClienteId,clienteId,setRolId } = useClienteIdStore()

  const navigate = useNavigate();
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setNombreEmpresa("");
      setClienteId(null);
      
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombreEmpresa.trim()) {
      Swal.fire({
        icon: "error",
        title: "Campo requerido",
        text: "El nombre de la empresa es obligatorio.",
      });
      return;
    }
    setLoading(true);
    try {
      const payload: CreateClientePayload = {
        nombre_empresa: nombreEmpresa,
        suscripcion_id: planId,
        activo: true,
      };
      const res = await clienteService.crearCliente(payload);
      const cliente = res.id;
      setClienteId(cliente); // <- Aquí guardas en Zustand
      setRolId(2);//Por default agrego 2 como rol de Admi Cliente
      console.log("id de Zustand", cliente);
      Swal.fire({
        icon: "success",
        title: "¡Empresa creada!",
        text: "La empresa fue registrada exitosamente.",
        confirmButtonText: "Ir a servicio"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(`/servicio/${planId}`);
        }
      });
      setNombreEmpresa("");
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error?.response?.data?.message || "No se pudo crear la empresa.",
      });
    } finally {
      setLoading(false);
    }
  };

  // Lógica para el botón de pago
  const handlePago = async () => {
    if (!clienteId) return;
    setLoadingPago(true);
    try {
      const res = await clienteService.comprarSuscripcion(clienteId, planId);
      setPagoUrl(res.url);
      if (res.url) {
        window.location.href = res.url; // Redirige a Stripe
      }
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error?.response?.data?.message || "No se pudo iniciar el pago.",
      });
    } finally {
      setLoadingPago(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 mx-4">
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
          {clienteId
            ? "¡Empresa creada! Ahora realiza el pago para activar tu suscripción"
            : "Ingresa el nombre de tu empresa para suscribirte"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nombre de la empresa"
            value={nombreEmpresa}
            onChange={e => setNombreEmpresa(e.target.value)}
            disabled={loading || !!clienteId}
            autoFocus
          />
          <div className="flex justify-center gap-4 mt-2">
            <button
              type="submit"
              disabled={loading || !!clienteId}
              className="bg-[#FF6D00] hover:bg-[#ff8c00] text-white font-semibold py-2 px-4 rounded-xl transition disabled:opacity-60"
            >
              {loading ? "Enviando..." : "Crear Empresa y Suscribirse"}
            </button>
            <button
              type="button"
              onClick={onClose}
              disabled={loadingPago}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-xl transition"
            >
              Cerrar
            </button>
          </div>
        </form>
        <div className="flex justify-center gap-4 mt-6">
        
        </div>
      </div>
    </div>
  );
};

export default ModalInformacionPlan;