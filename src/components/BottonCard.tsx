import { useNavigate } from 'react-router-dom';


interface BottonCardProps {
  nombre?: string;
  enlace?: string
  tipo?: boolean
}

export function BottonCard ({ nombre, enlace = "/", tipo = false } : BottonCardProps) {
  if (nombre == "") return
  const navigate = useNavigate();
  const handleQuickExit = () => {
    navigate(`/${enlace}`);
  };

  return (
    <button
        type= {tipo ? "submit" : "button"}
        onClick={handleQuickExit}
        className=" bottom-6 right-6 bg-orange-600 hover:bg-orange-700 
            text-white font-semibold py-2 px-4 rounded mt-8">
        {nombre}
    </button>
  )
}
