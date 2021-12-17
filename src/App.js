import React, {createContext, useState} from "react";
import {Router} from "./components/Router/Router";
import {themes} from "./components/ThemeSwitcher/ThemeSwitcher";
import './App.css'

// eslint-disable-next-line react-hooks/rules-of-hooks
export const ThemeSwitcherContext = createContext({
    themes: themes,
    currentTheme: 'dark',
    switcher: console.error
})

function App() {

    const [theme, setTheme] = useState('dark')

    return (
        <div className="App">
            <ThemeSwitcherContext.Provider value={
                {currentTheme: theme,
                switcher: setTheme,
                themes: themes}
            }>
                <Router/>
            </ThemeSwitcherContext.Provider>
        </div>
    );
}

export default App;
