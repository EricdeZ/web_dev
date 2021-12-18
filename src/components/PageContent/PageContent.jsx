import React from "react";
import './style.css'
import {ThemeSwitcher} from "../ThemeSwitcher/ThemeSwitcher";

export const PageContent = () =>  {

    return (
        <div className={'content-container'}>
            <ThemeSwitcher/>
        </div>
    )
}