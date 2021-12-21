import React, {useContext, useEffect, useState} from "react";
import {ColorPicker} from "../ColorPicker/ColorPicker";
import {ThemeSwitcherContext} from "../../App";

export const themes = {
    custom: 'custom',
    dark: 'dark',
    light: 'light'
}

export const switchTheme = (switcher, element, theme) => {
    switcher(theme)
    element.removeAttribute('style')
}

export const ThemeSwitcher = () => {
    const {switcher, themes, element, setElement} = useContext(ThemeSwitcherContext)
    const [showColorPicker, setShowColorPicker] = useState(true)
    useEffect(() => {
        if (!element) {
            setElement(document.getElementById('theme-element'))
        }
    })

    return (
        <div className="theme-switcher">
            {
                showColorPicker ? <ColorPicker/> : ''
            }
            <div className='theme-switcher-button-container'>
                <button className='light' onClick={() => {
                    switchTheme(switcher, element, themes.light)
                }}>Light
                </button>
                <button className='dark' onClick={() => {
                    switchTheme(switcher, element, themes.dark)
                }}>Dark
                </button>
                <button className='custom-theme' onClick={() => {
                    // setShowColorPicker(!showColorPicker)
                }}>Custom
                </button>
            </div>
        </div>
    )

}