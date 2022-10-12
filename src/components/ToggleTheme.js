import React,{useContext} from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ToggleTheme = () => {


        const {toggleTheme} =useContext(ThemeContext);

        return(
            <button onClick={toggleTheme} style={{border:'none',borderRadius:'40px'}}>Tema Değiştir</button>
        )
    
}

export default ToggleTheme;