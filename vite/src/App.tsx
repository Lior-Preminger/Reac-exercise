import React, { FC } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SelectGate from "./selecteGate";

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
    const userPath ='/user'
    const gatePath = '/gate'
    return (
    <BrowserRouter>
        <Routes>
            <Route path={basisPath}  element={<Hello name={'World'}/>}/>
            <Route path={userPath+basisPath+userName} element={<Hello name={userName}/>} />
            <Route path={gatePath} element={<SelectGate gateList={['c','cx','h','z']}/>}/>
       </Routes>
    </BrowserRouter>
)
}
export default App

