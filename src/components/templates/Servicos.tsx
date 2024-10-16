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
    <Card description="Colorindo seu lar com cuidado e carinho." />
    <Card description="Transformando espaços comerciais com excelência." />
</div>

        </div>

        
    )
}