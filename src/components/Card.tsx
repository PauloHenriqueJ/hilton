// Componentes para ícones


// Interface de propriedades do card
export interface CardProps {
  description?: string;
  bgColor?: string;
  icon?: JSX.Element;
  className?: string;
}

// Componente Card
export default function Card(props: CardProps) {
  return (
    <div className={`flex items-center p-4 ${props.bgColor} rounded-lg shadow-md border border-gray-900 ${props.className}`}>
      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-black flex items-center justify-center">
        {props.icon}
      </div>
      <div className="ml-4">
        <p className="text-md font-medium text-gray-900 font-medium antialiased">{props.description}</p>
      </div>
    </div>
  );
}