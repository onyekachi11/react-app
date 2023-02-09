// import { useState } from "react";
import React from "react";
import Header from "./Header";
import List from "./List";
// import { Task } from "./List";
import './app.css'

const App = () => {

    return(
        <div className="container">
            <div className="app-wrapper">
            <Header />
            </div>
            <div className="button">
                <List />
            </div>
            {/* <div>
                <Task />
            </div> */}
        </div>
    )
}

export default App