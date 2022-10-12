import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ToggleTheme from "./components/ToggleTheme";
import AuthContextProvider from "./contexts/AuthContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import BookContextProvider from "./contexts/BookContext";

function App() {

  
  return (
    <div className="App">
     <AuthContextProvider>
      <ThemeContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ToggleTheme />
        </ThemeContextProvider>
     </AuthContextProvider>
    </div>
  );
}

export default App;
