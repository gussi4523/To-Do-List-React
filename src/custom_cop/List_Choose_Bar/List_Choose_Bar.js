import "./ListChooseBar.css"

let Put = {
    name: "",
    href: ""
}

export default function ListChooser(){

    

    let list:Put[]=[];

    let list_h = list.map(p =>
        <li>
        p
        </li>
    );

    return(<div>
        <button className='btn-list'>
            my lists
        </button>
        <ul className="ul-list">
            <li>

            </li>
        </ul>
    </div>);
}