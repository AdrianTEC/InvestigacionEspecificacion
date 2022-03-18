import React  from "react";
import { ReactDOM } from "react";

function Tester({value}){
    return(
        <div>
            <div data-testid="container">{value}</div>
            <img src="https://i.pinimg.com/564x/8b/22/de/8b22de0690b179400541988a6d8c6de5.jpg"  />
        </div>
    )
}


export default Tester;