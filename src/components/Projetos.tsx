export default function Projetos(){
    return(
        <div id="projetos" className="flex boxed flex flex-col justify-end items-center mt-12">
            <h1 className="antialiased text-center font-bold sm:font-medium mt-7 text-lg sm:text-xl md:text-2xl lg:text-5xl">Projetos</h1>
            <span className="antialiased text-center font-medium mt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl text-wrap">Nossa empresa é especializada em transformar ambientes residenciais, comerciais,
                 quadras esportivas e instalações médicas com serviços de pintura de alta qualidade.
                  Cada projeto é realizado com dedicação e atenção aos detalhes, garantindo um resultado impecável e duradouro.</span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12 lg:w-[1200px] lg:h-">
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
        <a href="https://imgur.com/sOiz87d" target="_blank" rel="noopener noreferrer">
            <img src="https://imgur.com/sOiz87d.jpg" alt="Descrição da Foto 1" className="w-full h-48 object-cover"/>
        </a>
        <div className="p-4">
            <p className="text-gray-700">Descrição da Foto 1</p>
        </div>
    </div>
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <a href="https://imgur.com/E3DRgTh" target="_blank" rel="noopener noreferrer">
            <img src="https://imgur.com/E3DRgTh.jpg" alt="Descrição da Foto 2" className="w-full h-48 object-cover"/>
        </a>
        <div className="p-4">
            <p className="text-gray-700">Descrição da Foto 2</p>
        </div>
    </div>
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <a href="https://imgur.com/8FfNqev" target="_blank" rel="noopener noreferrer">
            <img src="https://imgur.com/8FfNqev.jpg" alt="Descrição da Foto 3" className="w-full h-48 object-cover"/>
        </a>
        <div className="p-4">
            <p className="text-gray-700">Descrição da Foto 3</p>
        </div>
    </div>
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <a href="https://imgur.com/UJeOZG6" target="_blank" rel="noopener noreferrer">
            <img src="https://imgur.com/UJeOZG6.jpg" alt="Descrição da Foto 4" className="w-full h-48 object-cover"/>
        </a>
        <div className="p-4">
            <p className="text-gray-700">Descrição da Foto 4</p>
        </div>
    </div>
    
</div>

                  
            </div>
    )
}