import React from "react";
import "./Clavier.css"
import { Playe } from "../music/script";
import KeyBind from "./keybind/keybinds";

export default function Clavier(){

    function down(e){
        
        Playe(e, true)
    }
    function up(e){
        
        Playe(e, false)
    }
    return(
        <div className="main">
            <div className="partp">
                <div className="white" id="do"  
                onMouseDown={()=>{down("do")}}
                onMouseUp={()=>{up("do")}}
                ></div>
                <div className="white" id="re"  
                onMouseDown={()=>{down("re")}}
                onMouseUp={()=>{up("re")}}
                ></div>
                <div className="white" id="mi"  
                onMouseDown={()=>{down("mi")}}
                onMouseUp={()=>{up("mi")}}
                ></div>
                <div className="blackOne">
                </div>
                <div className="blackTow">
                </div>
                <div className="blackTree">
                </div>
                <div className="blackFau">
                </div>
                <div className="blackt">
                </div>
            </div>
            <div className="partp">
            <div className="white" id="fa"  
                onMouseDown={()=>{down("fa")}}
                onMouseUp={()=>{up("fa")}}
                ></div>

                <div className="white" id="sol"  
                onMouseDown={()=>{down("sol")}}
                onMouseUp={()=>{up("sol")}}
                ></div>

                <div className="white" id="la"  
                onMouseDown={()=>{down("la")}}
                onMouseUp={()=>{up("la")}}
                ></div>
                <div className="white" id="si"  
                onMouseDown={()=>{down("si")}}
                onMouseUp={()=>{up("si")}}
                ></div>
            </div>
            
        </div>
    )
}
