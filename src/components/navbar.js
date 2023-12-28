import { Link } from "react-router-dom";


export default function NavBar(){
    return(
        <div>
             <Link to="/">Stock</Link>
             <Link to="/addItem">Add Item</Link>
        </div>
    )
}