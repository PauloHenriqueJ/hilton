import Contatos from "../Contatos"

interface RodapeProps{
    className?: string
}

export default function Rodape (props:RodapeProps){
    return (
        <footer className={`flex items-center justify-end text-zinc-950 px-7 border-t border-zinc-800
            ${props.className ?? ''}`}>
                <div>
                    
                </div>
                <div className="flex justify-end items-center boxed">
               
                Todos os direitos reservados &copy; {new Date().getFullYear()}
                </div>
               
                 </footer>
    )
 }