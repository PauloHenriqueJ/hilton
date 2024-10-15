import Image from "next/image";

export default function Logo(){
    return(
      <div className="flex items-center">
        <div className="fixed left-5 flex justify-start items-center">
        <span className=" lg:text-5xl md:text-2xl sm:text-xl">Bem vindo</span>
      <Image src="https://imgur.com/h3V3ClZ.png" alt="logo"
      width={420}
      height={200}
      quality={100}
      className="" />

        </div>
        
      </div>
    )
}


