import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Contatos(){
    return(
        <div className='flex-1 border border-zinc-700 rounded-md'>
            <h1 className="antialiased text-center font-bold sm:font-medium mt-7 text-lg sm:text-xl md:text-2xl lg:text-5xl">
        Contatos
      </h1>
      <div>
      <div className=" text-white p-2 rounded-lg flex flex-col gap-3">
       
    
        <div className="flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4  ">
        <span className='text-black font-semibold'>(71) 9 92159099</span>
          <Link href="https://wa.me/5571992159099" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="flex justify-center hover:text-green-400">
              <FaWhatsapp className='text-black' size={30} />
            </a>
          </Link>
          
          <Link href="https://www.instagram.com/hilton_melo87/" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="flex justify-center hover:text-pink-400">
              <FaInstagram className='text-black' size={30} />
            </a>
          </Link>
          
          <Link href="https://www.facebook.com/hiltonmelosilva.silva" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="flex justify-center hover:text-blue-400">
              <FaFacebook className='text-black' size={30} />
            </a>
          </Link>
        </div>
      </div>

      </div>
        </div>
    )
}