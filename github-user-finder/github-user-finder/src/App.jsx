import GithubUserFinder from "./components/GithubUserFinder"
import { createContext, useState } from "react";
import "./App.css";
  
export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };


  return (
    <>
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <input type="button" id="toggle-btn" value={theme === "light" ? "dark" : "light"} onClick={toggleTheme} />
      <div className="App" id={theme}>
        <GithubUserFinder/>
      </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
