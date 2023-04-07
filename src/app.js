import React from "react";
import Clavier from "./compoments/Clavier/Clavier";
import KeyBind from "./compoments/Clavier/keybind/keybinds";

export default function App(){
    return(
    <div>
        <Clavier/>
        <KeyBind/> 
    </div>
    )
}