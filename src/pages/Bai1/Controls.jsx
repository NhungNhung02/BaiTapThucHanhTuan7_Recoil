import { useRecoilState } from "recoil";
import {countState} from "./counterState";
import { useState } from "react";

export default function Controls(){
    const[count , setCount] = useRecoilState(countState);

    return(
        <div>
            <button onClick={() => setCount(count+1)}>Dau +</button>
            <button onClick={()=> setCount(count-1)}> Dau -</button>
        </div>
    )

};