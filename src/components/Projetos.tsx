import Projetos from "./Grid";

export default function Projeto (){
  return (
    <div>
      <div>
      <h1 className="antialiased text-center font-bold sm:font-medium mt-7 text-lg sm:text-xl md:text-2xl lg:text-5xl">
        Projetos
      </h1>

      <p className="antialiased text-center font-medium mt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl">
      Nossa empresa é especializada em transformar ambientes residenciais, comerciais, quadras esportivas e instalações médicas com serviços de pintura de alta qualidade. 
      Cada projeto é realizado com dedicação e atenção aos detalhes, garantindo um resultado impecável e </p>

      <Projetos/>
      </div>
    </div>
  )
}