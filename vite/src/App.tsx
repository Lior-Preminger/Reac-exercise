import React, { FC } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";

export interface HelloProps {
  name: string;
}

const Hello:  FC<HelloProps> = ({
  name
}) => {
    return(
       <div>
            <h1> Hello {name} </h1>
      </div>
    )
};

const App =() =>{
    const userName= window.location.pathname.split('/').pop() || ''
    const basisPath ='/'
    const user ='/user'
    return (
    <BrowserRouter>
        <Routes>
            <Route path={basisPath}  element={<Hello name={'World'}/>}/>
            <Route path={user+basisPath+userName} element={<Hello name={userName}/>} />
       </Routes>
    </BrowserRouter>
)
}
export default App

