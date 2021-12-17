import React from "react";
import './style.css'
import {ThemeSwitcher} from "../ThemeSwitcher/ThemeSwitcher";

export const PageContent = () =>  {

    return (
        <div className={'content-container'}>
            <div>
                <div className='box one'/>
                <div className='box two'/>
                <div className='box three'/>
            </div>
            <ThemeSwitcher/>
        </div>
    )
}