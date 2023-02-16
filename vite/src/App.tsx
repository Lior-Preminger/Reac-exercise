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
    const basisPath ='/'
    return (
    <BrowserRouter>
        <Routes>
            <Route path={basisPath}  element={<Hello name={'World'}/>}/>
       </Routes>
    </BrowserRouter>
)
}
export default App

