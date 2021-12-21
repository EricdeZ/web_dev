import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {useContext} from "react";
import {Page} from "../Page/Page";
import {ThemeSwitcherContext} from "../../App";

export const Router = () => {

    const {currentTheme} = useContext(ThemeSwitcherContext)

    return (<div id='theme-element' className={currentTheme + ' page-container'}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Page/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
            )
        }