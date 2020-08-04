import React, { useState } from "react";
import ReactDOM from "react-dom";

import Header from 'nav/build/Header';
import Basket from 'basket/build/Basket';

import "./index.css";

const App = () => {
    const [showBasket, setShowBasket] = useState(false);
    return (
        <div>
            <Header />
            <div>Hi there, I'm React from React.</div>
            <button
                onClick={() => setShowBasket(!showBasket)}
            >
                Toggle Basket
            </button>
            {
                showBasket && <Basket/>
            }
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("app"));
