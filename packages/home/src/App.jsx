import React, { useState } from "react";
import ReactDOM from "react-dom";

import Header from 'nav/build/Header';
import Basket from 'basket/build/Basket';

import "./index.css";
import './app.css';
import ProductList from "./productList";

const App = () => {
    const [selected, setSelected] = useState([]);

    const onBuyItem = item => {
        setSelected(curr => [...curr, item]);
    };

    return (
        <div className="app">
            <Header />
            <h1>Hello World Store</h1>
            <div className="app-content">
                <section>
                    <ProductList
                        onBuyItem={onBuyItem}
                    />
                </section>
                <section>
                    {
                        selected.length > 0 &&
                        <Basket
                            items={selected}
                            onClear={() => setSelected([])}
                        />
                    }
                </section>
            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("app"));
