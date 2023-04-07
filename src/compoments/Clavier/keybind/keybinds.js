import React, { Fragment } from "react";
import {  press, pre } from "../../music/script";
import "./keybinds.css"

export default function KeyBind(){
    let show  = <div>sku</div>;
    document.addEventListener("keydown" ,(e)=>{
        press(e.key)
    })
    document.addEventListener("keyup", (e)=>{
        pre(e.key)
    })
     
    function change(){
        return(<div>
            skuuu
        </div>)
    }
return(
    <Fragment>
        <button
        onClick={change}
        >
            Config
        </button>
        <div className="keys">
            <p>
                Do = 'a'
            </p>
            <p>
                re = 'z'
            </p>
            <p>
                mi = 'e'
            </p>
            <p>
                fa = 'r'
            </p>
            <p>
                sol = 't'
            </p>
            <p>
                la = 'y'
            </p>
            <p>
                si = 'u'
            </p>
        </div>
        
    </Fragment>
)
}