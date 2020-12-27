import * as React from "react";
import Product from "./product";

export interface ShoppingCartProps {}

export interface ShoppingCartState {
  products: { id: number; name: string; count: number }[];
}

class ShoppingCart extends React.Component<
  ShoppingCartProps,
  ShoppingCartState
> {
  state = {
    products: [
      { id: 1, name: "burger", count: 3 },
      { id: 2, name: "cola", count: 1 },
      { id: 3, name: "bread", count: 4 },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <h2>Shopping Cart</h2>
        <table className="table table-dark table-hover table-responsive">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Count</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((product) => (
              <tr key={product.id}>
                <Product product={product} />
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default ShoppingCart;
