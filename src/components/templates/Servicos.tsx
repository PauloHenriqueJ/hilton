import { FaBasketballBall, FaBuilding, FaHome, FaHospital } from "react-icons/fa";
import Card from "../Card";

export default function Servicos(){
    return (
        <div className="flex boxed flex flex-col justify-end items-center ">
           <h1 className="antialiased text-center font-bold sm:font-medium mt-7 text-lg sm:text-xl md:text-2xl lg:text-5xl">
  Serviços
</h1>

            <p className="antialiased text-center font-medium mt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl">
  Revitalize seu lar ou estabelecimento com a excelência de uma pintura profissional. A transformação que você merece.
</p>

<div className="mt-3 flex flex-col sm:flex-row gap-3">
      <Card 
        description="Colorindo seu lar com cuidado e carinho."
        bgColor="bg-blue-300"
        icon={<FaHome className="text-white w-10 h-7" />}
      />
      <Card 
        description="Transformando espaços comerciais com excelência."
        bgColor="bg-green-300"
        icon={<FaBuilding className="text-white w-10 h-7" />}
      />
      <Card 
        description="Quadras esportivas com alta durabilidade."
        bgColor="bg-red-300"
        icon={<FaBasketballBall className="text-white w-10 h-7" />}
      />
      <Card 
        description="Hospitais pintados com cuidado e higiene."
        bgColor="bg-yellow-300"
        icon={<FaHospital className="text-white w-10 h-7" />}
      />

        </div>
        </div>

        
    )
}