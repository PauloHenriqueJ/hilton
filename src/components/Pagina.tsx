import { ReactNode } from "react"
import Cabecalho from "./templates/Cabecalho"
import Rodape from "./templates/Rodape"
import Servicos from "./templates/Servicos"
import Projetos from "./Projetos"

interface PaginaProps {
    children?: ReactNode
}


export default function Pagina(props: PaginaProps){


    return(
        <div className=" flex flex-col min-h-screen">
            <Cabecalho className="flex flex-col items-center justify-center"/>
            <div className=" flex-1 flex boxed">
             
                <main className="flex-1 py-7">
                    <Servicos/>
                    <Projetos/>
                    {props.children}</main>
            </div>
            <Rodape className="h-16"/>
        </div> 
    )
}