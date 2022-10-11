import React,{Component} from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class ToggleTheme extends Component{

    static contextType = ThemeContext;

    render(){
        const {toggleTheme} = this.context;

        return(
            <button onClick={toggleTheme} style={{border:'none',borderRadius:'40px'}}>Tema Değiştir</button>
        )
    }
}

export default ToggleTheme;