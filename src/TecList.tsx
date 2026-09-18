import { use } from "react";
import type { Itecnologis } from "./types";
import TecCard from "./TecCard";

interface TecListProps{
    tecPromise : Promise<Itecnologis[]>;
}
const TecList = ({tecPromise}:TecListProps) => {
    const allTecnologis = use(tecPromise)
    
    
    return (
        
       
        <div className="col-span-3 grid grid-cols-3 gap-5">
            
            {allTecnologis.map((singleTecnologi)=>(
                <TecCard singleTecnologi={singleTecnologi} key={singleTecnologi.id}></TecCard>
            
            ))}
        </div>
    );
};

export default TecList;