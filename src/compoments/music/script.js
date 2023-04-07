


export function Playe(e, c){
    const a = document.getElementById(e +"n")
    if(c == true){
        a.play()
        let c = document.getElementById(e)
        c.style.backgroundColor = "green"
    }else{
        let c = document.getElementById(e)
        c.style.backgroundColor = "white"
        a.pause();
        a.currentTime = 0;
    }
    
}

export function press(a){
    switch(a){
        case "a":
            Playe("do", true)    
            break;
        case "z":
            Playe("re", true)    
            break;
        case "e":
            Playe("mi", true)    
            break;   
        case "r":
            Playe("fa", true)    
            break;
        case "t":
            Playe("sol", true)    
            break;
        case "y":
            Playe("la", true)    
            break;  
        case "u":
            Playe("si", true)    
            break;  
            

    }
}

export function pre(a){
    switch(a){
        case "a":
            Playe("do", false)    
            break;
        case "z":
            Playe("re", false)    
            break;
        case "e":
            Playe("mi", false)    
            break;   
        case "r":
            Playe("fa", false)    
            break;
        case "t":
            Playe("sol", false)    
            break;
        case "y":
            Playe("la", false)    
            break;  
        case "u":
            Playe("si", false)    
            break;                 
    }
}