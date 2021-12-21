import React, {useState} from "react";
import './style.css'
import {Logo} from "../../icons/Logo/Logo";
import {ThemeSwitcher} from "../ThemeSwitcher/ThemeSwitcher";
import {Animation, animations} from "../Animation/Animation";

export const PageContent = () =>  {

    const [bob, setBob] = useState(true)
    return (
        <div className={'content-container'}>
            <Logo width={'150px'}/>
            <Animation state={bob}
                       component={<div className={'bob'}/>}
                       animation={animations.height}
                       renderComponent={setBob}
            />
            <ThemeSwitcher/>
            <button onClick={() => setBob(!bob)}>Bob</button>
        </div>
    )
}