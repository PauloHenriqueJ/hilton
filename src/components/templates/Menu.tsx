import Link from "next/link"

interface MenuProps{
    className?: string
}

export default function Menu (props: MenuProps){
    return (
        <aside className={` boxed ${props.className  ?? ''}` }>
            <nav className="fixed top-0 left-0  w-full flex sm:justify-center ml-3 sm:items-center justify-start items-start space-x-3 bg-white py-2 shadow-md">
    <Link className="transition-transform hover:scale-105 hover:font-semibold " href={"#servicos"}>Serviços</Link>
    <Link className="transition-transform hover:scale-105 hover:font-semibold " href={"#projetos"}>Projetos</Link>
    <Link className="transition-transform hover:scale-105 hover:font-semibold " href={"#"}>Sobre nós</Link>
    <Link className="transition-transform hover:scale-105 hover:font-semibold " href={"#"}>Contato</Link>

</nav>

        </aside>
    )
 }