import React,{Component,createContext} from "react";

export const AuthContext = createContext();

class AuthContextProvider extends Component{

    state = {
        isAuthanticated:false
    }

    toggleAuth = () => {
        this.setState({isAuthanticated:!this.state.isAuthanticated});
    }

    render(){
        return(
            <AuthContext.Provider value={{...this.setState,toggleAuth:this.toggleAuth}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider