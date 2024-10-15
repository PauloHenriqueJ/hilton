import Logo from "./Logo"
import Menu from "./Menu"

interface CabecalhoProps{
    className?: string
}
 
 export default function Cabecalho (props:CabecalhoProps){
    return (
        <header className={`w-full h-[710px] bg-back bg-cover bg-no-repeat bg-center
           ${props.className ?? ''}`}>
            <Menu className="relative"/>
            <Logo/>
            
           </header>
    )
 }

 