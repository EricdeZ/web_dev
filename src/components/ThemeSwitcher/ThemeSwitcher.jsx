import React, {useContext, useState} from "react";
import {ColorPicker} from "../ColorPicker/ColorPicker";
import {ThemeSwitcherContext} from "../../App";

export const themes = {
    custom: 'custom',
    dark: 'dark',
    light: 'light'
}

export const switchTheme = (switcher, theme) => {
    const r = document.getElementById('theme-element')
    switcher(theme)
    r.removeAttribute('style')
}

export const ThemeSwitcher = () => {

    const {switcher, themes} = useContext(ThemeSwitcherContext)
    const [showColorPicker, setShowColorPicker] = useState(false)

    return (
        <div className="theme-switcher">
            <div className='theme-switcher-button-container'>
                <button className='light' onClick={() => {
                    switchTheme(switcher, themes.light)
                }}>Light
                </button>
                <button className='dark' onClick={() => {
                    switchTheme(switcher, themes.dark)
                }}>Dark
                </button>
                <button className='custom-theme' onClick={() => {
                    setShowColorPicker(!showColorPicker)
                }}>Custom
                </button>
            </div>
            {
                showColorPicker ? <ColorPicker/> : ''
            }
        </div>
    )

}