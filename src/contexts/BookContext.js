import { createContext,useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) =>{

    const [books,setBooks] = useState([
        {ad:'Var mısın',id:1},
        {ad:'Nutuk',id:2},
        {ad:'Bir Ömür Nasıl Yaşanır',id:3},
        {ad:'Hayvan Çiftliği',id:4}
    ]);

    return(
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    )

}

export default BookContextProvider;