import Image from "next/image";

export default function Logo(){
    return(
      <div className="flex items-center">
        <div className="fixed absolute left-5 flex justify-start  items-center">
        <div className="flex flex-col">
        <span className=" bg-gradient-to-r from-blue-800 via-green-600 to-yellow-500 bg-clip-text text-transparent text-3xl lg:text-5xl text-grad
        font-bold shadow-sm">
        Bem vindo
        </span>
        
        </div>
      <Image src="https://imgur.com/h3V3ClZ.png" alt="logo"
      width={420}
      height={200}
      quality={100}
      
      />

        </div>
        
      </div>
    )
}



