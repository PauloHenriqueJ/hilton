import Link from 'next/link';

interface RodapeProps{
    className?: string
}

export default function Rodape (props:RodapeProps){
    return (
        <footer className={`flex items-center justify-end text-zinc-950 px-7 border-t mt-5 border-zinc-800
            ${props.className ?? ''}`}>
                <div className='text-sm'>
                  
                </div>
                <div className="flex justify-end items-center boxed">
               
                Todos os direitos reservados &copy; {new Date().getFullYear()}
                <Link href="https://www.devph.com.br" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="underline ml-2 hover:text-blue-400 text-sm">
             Portfólio desenvolvedor
              </a>
            </Link>
                </div>
               
                 </footer>
    )
 }