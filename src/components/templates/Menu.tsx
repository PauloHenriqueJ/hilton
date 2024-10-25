import Link from "next/link";

interface MenuProps {
  className?: string;
}

export default function Menu(props: MenuProps) {
  return (
    <aside className={`boxed ${props.className ?? ''}`}>
      <nav className="fixed top-0 left-0 w-full flex gap-5 items-center sm:flex-row justify-start sm:justify-center items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 bg-white py-2 shadow-md">
        <Link href={"#servicos"} legacyBehavior>
          <a className="transition-transform hover:scale-105 hover:font-semibold">
            Serviços
          </a>
        </Link>
        <Link href={"#projetos"} legacyBehavior>
          <a className="transition-transform hover:scale-105 hover:font-semibold">
            Projetos
          </a>
        </Link>
        <Link href={"#sobre"} legacyBehavior>
          <a className="transition-transform hover:scale-105 hover:font-semibold">
            Sobre nós
          </a>
        </Link>
        <Link href={"#contatos"} legacyBehavior>
          <a className="transition-transform hover:scale-105 hover:font-semibold">
            Contato
          </a>
        </Link>
      </nav>
    </aside>
  );
}
