import Contatos from "@/components/Contatos";
import Projetos from "@/components/Grid";
import Sobre from "@/components/Sobre";
import Cabecalho from "@/components/templates/Cabecalho";
import Rodape from "@/components/templates/Rodape";
import Servicos from "@/components/templates/Servicos";
import { ReactNode } from "react";


interface PaginaProps {
  children?: ReactNode;
}

export default function Pagina(props: PaginaProps) {
  return (
    <div className="flex flex-col min-h-screen no-scrollbar">
      <Cabecalho className="flex flex-col items-center justify-center w-full" />
      <div className="flex-1 flex justify-center">
        <main className="flex-1 py-7 mx-auto w-full max-w-screen-lg px-4 sm:px-6 lg:px-8">
          <Servicos />
          <Projetos />
          <Sobre />
          <Contatos />
          {props.children}
        </main>
      </div>
      <Rodape className="h-16" />
    </div>
  );
}
