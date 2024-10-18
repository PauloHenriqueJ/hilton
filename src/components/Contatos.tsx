import Link from 'next/link';
import { FaFacebook, FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa';

export default function Contatos(){
    return(
        <div id='contatos' className=' text-center  flexflex-1 border border-zinc-700 rounded-md items-center mt-7 '>
            <h1 className="antialiased text-center font-bold sm:font-medium mt-7 text-lg sm:text-xl md:text-2xl lg:text-5xl">
          
        Contatos
      </h1>
     
      <span  className=' text-black font-semibold text-center'> (71) 9 9215-9099</span>
      
      <div>
      <div className=" text-white p-2 rounded-lg  flex gap-3 items-center justify-center">
       
    
        <div className="flex items-center justify-center sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4 gap-4 lg:gap-3 ">
          
       
          <Link href="https://wa.me/5571992159099" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="flex justify-center hover:text-green-400">
              <FaWhatsapp className='text-green-400 ' size={30} />
            </a>
          </Link>
          
          <Link href="https://www.instagram.com/hilton_melo87/" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="flex justify-center hover:text-pink-400">
              <FaInstagram className='text-violet-700' size={30} />
            </a>
          </Link>
          
          <Link href="https://www.facebook.com/hiltonmelosilva.silva" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="flex justify-center hover:text-blue-400">
              <FaFacebook className='text-blue-600' size={30} />
            </a>
          </Link>
        </div>
      </div>

      </div>
        </div>
    )
}