import Contatos from "@/components/Contatos";
import Projetos from "@/components/Grid";
import Sobre from "@/components/Sobre";
import Cabecalho from "@/components/templates/Cabecalho";
import Rodape from "@/components/templates/Rodape";
import Servicos from "@/components/templates/Servicos";
import { ReactNode } from "react";


export default function Page(){
    return(
        <div className=" flex-col min-h-screen no-scrollbar">
            <Cabecalho className="flex flex-col items-center justify-center w-full"/>
            <div className=" flex-1 flex boxed">
             
                <main className="flex-1 py-7">
                <Sobre/>
                    <Servicos/>
                    <Projetos/>
                    <Contatos/>
                    </main>
            </div>
            <Rodape className="h-[18]"/>
        </div> 
    )
}