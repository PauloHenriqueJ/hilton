import Link from "next/link"

interface MenuProps{
    className?: string
}

export default function Menu (props: MenuProps){
    return (
        <aside className={` ${props.className  ?? ''}` }>
            <nav className="fixed top-0 left-0 w-full flex justify-center space-x-4 bg-white py-2 shadow-md">
    <Link href={"#"}>Serviços</Link>
    <Link href={"#"}>Projetos</Link>
    <Link href={"#"}>Sobre nós</Link>
</nav>

        </aside>
    )
 }