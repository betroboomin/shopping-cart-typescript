import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (()=> T)){
    const [item, setItem] = useState<T>(()=>{
        const localitem = localStorage.getItem(key);
        if(localitem !== null)
        {
            return JSON.parse(localitem)
        }
        if (initialValue === "function"){
            return (initialValue as ()=>T);
        }else{
            return initialValue
        }
    })

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(item))
    },[key, item])


      return [item, setItem] as [typeof item, typeof setItem]
    
}