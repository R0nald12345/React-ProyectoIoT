import { useForm } from "react-hook-form";
// import logoUAGRM from "../img/logo_escudo_uagrm.png";
// import uagrm_logo from "../img/uagrm_logo.png";
// import logo_facebook from "../img/logo_facebook.png";
// import logo_whatApps from "../img/logo_whatApps.png";
import imgenFondo from "../../../../public/imagenFondo.png";
// import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

// Tipado para el formulario de login
type LoginForm = {
  email: string;
  password: string;
};


const PageRegister = () => {

  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = async (data: LoginForm) => {
    try {
      await login(data); // Tu contexto espera un objeto { email, password }
      navigate("/dashboard"); // Redirige al dashboard si el login es exitoso
    } catch (error) {
      // El error ya es mostrado por SweetAlert, pero puedes mostrar un error general si quieres
      setError("root", { message: "Credenciales incorrectas o error de red." });
    }
  };

  return (
    <>
      <div
        className="min-h-screen w-screen h-screen bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `url(${imgenFondo})`
        }}
      >
        {/* <header className=" flex justify-between p-5">
          <img
            // src={uagrm_logo}
            alt="Logo UAGRM"
            width={80}
            height={100}
          />
          <section className="flex gap-5 ">
            <img
            //   src={logo_facebook}
              className="rounded-xl"
              alt="Logo UAGRM"
              width={50}
              height={50}
            />
            <img
            //   src={logo_whatApps}
              className="rounded-xl"
              alt="Logo UAGRM"
              width={50}
              height={50}
            />
          </section>
        </header> */}

        <section className="flex items-center justify-center min-h-screen">
            {/* Contenido del formulario */}
            <div className="px-5 md:px-12 py-8 mx-auto md:w-[40%] bg-white/20 rounded-md shadow-lg mt-8 md:mt-0">
              <h2 className="font-mplus-bold text-3xl md:text-5xl text-white  text-center">Inicia Sesión</h2>
             
              <form onSubmit={handleSubmit(onSubmit)} className="mt-3 mx-auto">
                
                {/* Email */}
                <div className="mb-2">
                  <input
                    type="email"
                    placeholder="Ingrese su correo"
                    {...register("email", {
                      required: "El correo es obligatorio",
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Ingrese un correo válido",
                      },
                    })}
                    className="font-mplus-bold text-gray-500 rounded-xl w-full p-2 mt-10 bg-white outline-none"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
                
                {/* Password */}
                <div className="mb-2">
                  <input
                    type="password"
                    placeholder="Contraseña"
                    {...register("password", {
                      required: "La contraseña es obligatoria",
                      minLength: {
                        value: 6,
                        message: "La contraseña debe tener al menos 6 caracteres",
                      },
                    })}
                    className="font-mplus-bold text-gray-500 rounded-xl w-full p-2 mt-8 bg-white outline-none"
                  />
                  {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>
                {/* Mensaje de error general */}
                {errors.root && <p className="text-red-500 text-sm mb-4">{errors.root.message}</p>}
                <div className="flex justify-between mt-10 gap-8">
                  {/* Botón de envío */}
                  <button
                    type="submit"
                    className="font-mplus-bold bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 w-full cursor-pointer"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Cargando...' : 'Ingresar'}
                  </button>
                  {/* Puedes implementar el registro en otro formulario o modal */}
                  <button
                    type="button"
                    className="font-mplus-bold bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 w-full cursor-pointer"
                    onClick={() => navigate("/auth/register")}
                  >
                    Registrarse
                  </button>
                </div>
                <div className=" font-mplus-bold w-full text-center mt-5 text-white hover:text-red-600 cursor-pointer">
                  <h4>¿Te olvidaste tu contraseña?</h4>
                </div>
              </form>

            </div>
          
          </section>
      </div>
    </>
  );
};

export default PageRegister;