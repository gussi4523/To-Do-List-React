import { useReducer, useState } from "react";
import "./Keys.css"



export default function Person_List(props){
    const [people,setPeople] = useState([
        {id : 1,name_s:"Glek",work:"web",isFinish:false},
        {id:2,name_s:"Shit",work:"web",isFinish:false}
    ]);

    let [webers, setWebers] = useState([]);

    webers = people.filter(p=> p.work === "web");

    let [input_s,setInput] = useState("");

    let [s,redS] = useState([]);

    function addEmploys(){
        if(input_s !=="" & !input_s.includes(" ")){
            setPeople([...people,{ id:people.length+1, name_s:input_s,work:"web",isFinish:false}]);
            setInput("");
        }
    }

    function handelInput(e){
        setInput(e.target.value);
    }

    

    function comFinish(e){
        console.log("run");
        console.log(webers[e.target.id-1]);
        setWebers(webers[e.target.id-1].isFinish = e.target.checked);
        console.log(webers[e.target.id-1]);
    }

    let list_s = webers.map(p => 
        <div className="card-wd-pat">
        {p.isFinish?<div className="worckers-card"><s className="list-title"><h1 className="list-title">work - {p.work}</h1></s>
            <a className="list-s">{p.id} name : {p.name_s} </a>
            <div className="done-box">
            <input type="checkbox"  className="checkbox-done" id={p.id}  onChange={comFinish}></input>
            {p.isFinish?<span className="proggres-text">Done</span>:
            <span className="proggres-text">In proggres</span>}
            </div>
            </div>
        :<div className="worckers-card"><h1 className="list-title">work - {p.work}</h1>
            <a className="list-s">{p.id} name : {p.name_s} </a>
            <div className="done-box">
            <input type="checkbox" className="checkbox-done" id={p.id}  onChange={comFinish}></input>
            {p.isFinish?<span className="proggres-text">Done</span>
            :<span className="proggres-text">In proggres</span>}
            </div>
            
            </div>}
        </div>
    );

    return(
        <div>
        <h2>List : {props.title}</h2>
        <div className="input-card">
            <input className="input-add" 
            value={input_s}
            onChange={handelInput}></input>
            <button className="but1"
         onClick={addEmploys}> add Employ</button>
        </div>
            <div className="scroll">
               <p className="card-holder-pat">{list_s}</p>
            </div>
        </div>
    );
    
}