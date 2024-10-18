import { ReactNode } from "react";
import Pagina from "./Pagina";


interface PaginaProps {
  children?: ReactNode;
}

export default function Home(props: PaginaProps) {
  return (
   <Pagina/>
  );
}
