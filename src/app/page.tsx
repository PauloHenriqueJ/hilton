import Contatos from "@/components/Contatos";
import Projetos from "@/components/Grid";
import Sobre from "@/components/Sobre";
import Cabecalho from "@/components/templates/Cabecalho";
import Rodape from "@/components/templates/Rodape";
import Servicos from "@/components/templates/Servicos";
import { ReactNode } from "react";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Cabecalho className="flex flex-col items-center justify-center w-full" />
      <div className="flex-1 flex justify-center w-full px-4 sm:px-6 lg:px-8">
        <main className="w-full max-w-screen-lg py-7">
          <Sobre />
          <Servicos />
          <Projetos />
          <Contatos />
        </main>
      </div>
      <Rodape className="h-16 w-full" />
    </div>
  );
}
