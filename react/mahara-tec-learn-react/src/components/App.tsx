import * as React from "react";
import { Button } from "react-bootstrap";
import NavBar from "./navbar";
import ShoppingCart from "./shopping-cart";
export interface AppProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Button variant="primary">Hi here</Button>
        <NavBar totalCount={0}></NavBar>
        <div className="container">
          <ShoppingCart />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
