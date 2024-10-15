interface RodapeProps{
    className?: string
}

export default function Rodape (props:RodapeProps){
    return (
        <footer className={`bg-green-500 ${props.className ?? ''}`}>Rodapé</footer>
    )
 }