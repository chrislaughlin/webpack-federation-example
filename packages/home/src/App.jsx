import React, { useState } from "react";
import ReactDOM from "react-dom";

import Header from 'nav/build/Header';
// import Basket from 'basket/build/Basket';
const BasketFallBack = React.lazy(() => import('basket/build/Basket'))
const Basket = React.lazy(() => import('mf-basket/Basket'))

import "./index.css";
import './app.css';
import ProductList from "./productList";

class BasketWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false};
    }

    static getDerivedStateFromError() {
        return { hasError: true}
    }

    render() {
        const {
            selected,
            setSelected
        } = this.props;

        if (this.state.hasError) {
            return (
                <React.Suspense fallback={<div>....loading basket fall back</div>}>
                    <BasketFallBack
                        items={selected}
                        onClear={() => setSelected([])}
                    />
                </React.Suspense>
            )
        }

        return (
            <React.Suspense fallback={<div>....loading basket</div>}>
                <Basket
                    items={selected}
                    onClear={() => setSelected([])}
                />
            </React.Suspense>
        )
    }
}

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
                        <BasketWrapper
                            selected={selected}
                            setSelected={setSelected}
                        />
                    }
                </section>
            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("app"));
