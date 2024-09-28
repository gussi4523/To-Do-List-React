import { useState } from "react";
import "./Keys.css"



export default function Person_List(){
    const [people,setPeople] = useState([
        {id : 1,name_s:"Glek",work:"web",isFinish:false},
        {id:2,name_s:"LOH",work:"soft"},
        {id:3,name_s:"Shit",work:"web",isFinish:true}
    ]);

    let webers = people.filter(p=> p.work === "web")

    let [input_s,setInput] = useState("");

    function addEmploys(){
        if(input_s !==""){
            setPeople([...people,{name_s:input_s,work:"web"}]);
            setInput("");
        }
    }

    function handelInput(e){
        setInput(e.target.value);
    }

    let list_s = webers.map(p => 
        <div>
        {p.isFinish?<div className="worckers-card"><s className="list-title"><h1 className="list-title">work - {p.work}</h1></s>
            <a className="list-s">name : {p.name_s} </a></div>
        :<div className="worckers-card"><h1 className="list-title">work - {p.work}</h1>
            <a className="list-s">name : {p.name_s} </a></div>}
        </div>
    );


    return(
        <div>
        <div className="input-card">
            <input className="input-add" 
            value={input_s}
            onChange={handelInput}></input>
            <button className="but1"
         onClick={addEmploys}> add Employ</button>
        </div>
            <div className="scroll">
               <p>{list_s}</p>
            </div>
        </div>
    );
    
}