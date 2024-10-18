import { ReactNode } from "react";
import Pagina from "./Pagina";


interface PaginaProps {
  children?: ReactNode;
}

export default function page(props: PaginaProps) {
  return (
   <Pagina/>
  );
}
