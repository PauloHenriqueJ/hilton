export interface CardProps{
    description?: string;
    className?: string
}
import { FaHotel } from "react-icons/fa6";

export default function Card(props: CardProps){
    return(
        <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md border border-gray-900 bg-blue-400">
        <div className="flex-shrink-0 h-12 w-12 rounded-full bg-black flex items-center justify-center">
          <FaHotel  className="text-white w-10 h-7"/>
            
        </div>
        <div className="ml-4">
            <p className="text-md font-medium text-gray-900 font-medium antialiased">{props.description}</p>
        </div>
    </div>
    

    )
}