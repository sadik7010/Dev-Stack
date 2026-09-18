import { use, type Dispatch, type SetStateAction } from "react";
import type { Itecnologis } from "./types";
import TecCard from "./TecCard";

interface TecListProps{
    tecPromise : Promise<Itecnologis[]>,
    selectToStack:Itecnologis[],
    setSelectToStack:Dispatch<SetStateAction<Itecnologis[]>>
}
const TecList = ({tecPromise,selectToStack,setSelectToStack}:TecListProps) => {
    const allTecnologis = use(tecPromise)
    
    
    return (
        
       
        <div className="col-span-3 grid grid-cols-3 gap-5">
            
            {allTecnologis.map((singleTecnologi)=>(
                <TecCard singleTecnologi={singleTecnologi} key={singleTecnologi.id } selectToStack={selectToStack} setSelectToStack={setSelectToStack} ></TecCard>
            
            ))}
        </div>
    );
};

export default TecList;