import Logo from "./Logo"
import Menu from "./Menu"

interface CabecalhoProps{
    className?: string
}
 
 export default function Cabecalho (props:CabecalhoProps){
    return (
        <header className={`bg-back bg-cover bg-no-repeat bg-center w-full lg:h-[710px] h-[50vh] sm:h-[70vh]
           ${props.className ?? ''}`}>
            <Menu className="mb-5"/>
            <Logo/>
            
           </header>
    )
 }

 