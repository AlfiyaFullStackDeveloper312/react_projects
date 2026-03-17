import { useState } from "react";

 import Authors from "./Authors";
import { authors } from "./AuthorsData";
  
import "../style/Main.css";
const Main = ()=>{
    // state
    const [authorlist] = useState(authors);

    return(
        <div>
            <h1>Authors and their books</h1>
            <Authors authorslist={authorlist}  />
        </div>
    )
}
export default Main;