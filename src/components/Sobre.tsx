import Image from "next/image";

export default function Sobre() {
  return (
    <div>
      <div>
        <h1 className="antialiased text-center font-bold sm:font-medium mt-7 text-lg sm:text-xl md:text-2xl lg:text-5xl">
          Sobre nós
        </h1>

      </div>
      <div className="flex flex-col sm:flex-row items-center p-4 bg-gray-100 rounded-lg shadow-md">
        <Image
          src="https://imgur.com/h3V3ClZ.png"
          alt="logo"
          width={520}
          height={200}
          quality={100}
          className="object-cover"
          
        />
       

        <div className="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left">
          <p className="antialiased text-center font-medium mt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl">
            Nossa empresa se dedica a oferecer serviços de pintura de alta
            qualidade para residências e comércios. Com anos de experiência no
            mercado, garantimos um serviço profissional e um acabamento
            impecável.
          </p>
        </div>
      </div>
    </div>
  );
}
