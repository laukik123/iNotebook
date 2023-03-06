import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState=(props)=>{
    const s1={
        "name":"raj",
        "class":"10a"
    }
    const [state, setstate] = useState(s1);
    const update=()=>{
            setTimeout(() => {
                setstate({
                    "name":"ajay",
                    "class":"10c"
                })
            }, 1000);
    }

return(
    <NoteContext.Provider value={{state,update}}>
       { props.children}
    </NoteContext.Provider>
)
}

export default NoteState;
