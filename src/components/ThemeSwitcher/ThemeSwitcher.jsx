import React, {useContext, useEffect, useState} from "react";
import {ColorPicker} from "../ColorPicker/ColorPicker";
import {ThemeSwitcherContext} from "../../App";

export const themes = {
    custom: 'custom',
    dark: 'dark',
    light: 'light'
}

export const createTheme = (switcher, color) => {
    const r = document.getElementById('theme-element')
    r?.style?.setProperty('--custom', color)
    switcher(themes.custom)
}

export const switchTheme = (switcher, theme) => {
    const r = document.getElementById('theme-element')
    switcher(theme)
    r.removeAttribute('style')
}

export const ThemeSwitcher = () => {

    const {switcher, themes} = useContext(ThemeSwitcherContext)
    const [color, setColor] = useState({
        hex: '#00FF80',
        hsv: {
            h: 180,
            s: 1,
            v: 1
        },
        hsl: {
            h: 180,
            s: 1,
            l: 1
        }
    })

    useEffect(() => {
        createTheme(switcher, color)
    }, [color, switcher])

    return (
        <div className="theme-switcher-container">
            <button onClick={() => {
                switchTheme(switcher, themes.light)
            }}>Light
            </button>
            <button onClick={() => {
                switchTheme(switcher, themes.dark)
            }}>Dark
            </button>
            <ColorPicker
                color={color}
                confirmChange={setColor}/>
        </div>
    )

}