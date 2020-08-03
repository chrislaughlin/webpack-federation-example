import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
const FallbackHeader = React.lazy(() => import("nav/build/Header"));
const Header = React.lazy(() => import("mf-nav/Header"));

const FallbackBasket = React.lazy(() => import("basket/build/Basket"));
const Basket = React.lazy(() => import("mf-basket/Basket"));

class HeaderWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return (
        <React.Suspense fallback={<div>Loading fallback header</div>}>
          <FallbackHeader />
        </React.Suspense>
      );
    }

    return (
      <React.Suspense fallback={<div>Header loading</div>}>
        <Header />
      </React.Suspense>
    );
  }
}

class BasketWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return (
          <React.Suspense fallback={<div>Loading fallback basket</div>}>
            <FallbackBasket />
          </React.Suspense>
      );
    }

    return (
        <React.Suspense fallback={<div>basket loading</div>}>
          <Basket />
        </React.Suspense>
    );
  }
}

const App = () => (
  <div>
    <HeaderWrapper />
    <div>Hi there, I'm React from React.</div>
    <BasketWrapper/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
