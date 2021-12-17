import React, {createContext} from "react";
import {Header} from "../Header/Header";
// import {useNavigate} from 'react-router-dom';
import {PageContent} from "../PageContent/PageContent";

const ActiveContext = createContext('')

export const Page = () =>  {
    // const history = useNavigate()

    return (
        <ActiveContext.Provider value={'home'}>
            <div className='content-container'>
                <Header/>
                <PageContent/>
            </div>
        </ActiveContext.Provider>
    )
}