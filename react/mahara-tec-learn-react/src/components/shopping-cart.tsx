import * as React from "react";
import Product, { IProduct } from "./product";
// import NavBar from "./navbar";

export interface ShoppingCartProps {}

export interface ShoppingCartState {
  products: IProduct[];
  totalProducts: number;
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
    totalProducts: 0,
  };

  componentDidMount = () => {
    this.calculateTotalCount();
  };
  calculateTotalCount = () => {
    this.setState({
      totalProducts: this.state.products.reduce((p, c) => p + c.count, 0),
    });
    console.log({
      totalProductsCount: this.state.products.reduce(
        (p, c) => p + c.count && p,
        0
      ),
    });
  };

  /* Private method for product on truth source */
  private onDeleteProduct = (product: IProduct) => {
    this.setState({
      products: this.state.products.filter(
        (_product) => _product.id !== product.id
      ),
    });
  };

  private onIncrementProduct = (product: IProduct) => {
    const products = this.state.products;
    const productIndex = products.findIndex(
      (_product) => _product.id === product.id
    );
    products[productIndex].count += 1;

    this.setState({
      totalProducts: this.state.totalProducts + 1,
      products,
    });
  };

  private onDecrementProduct = (product: IProduct) => {
    const products = this.state.products;
    const productIndex = products.findIndex(
      (_product) => _product.id === product.id
    );
    if (products[productIndex].count) {
      products[productIndex].count -= 1;
      this.setState({ products, totalProducts: this.state.totalProducts - 1 });
    }
  };

  private resetProductsCount = () => {
    this.setState({
      products: this.state.products.map((product) => {
        product.count = 0;
        return product;
      }),
      totalProducts: 0,
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* <h2 className="text-center ">Shopping Cart</h2> */}
        {/* <NavBar totalCount={this.state.totalProducts} /> */}
        {/* <button className="btn btn-secondary" onClick={this.resetProductsCount}> Reset </button> */}

        <table className="table table-dark table-hover text-center">
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
                <Product
                  product={product}
                  onDelete={this.onDeleteProduct}
                  onIncrement={this.onIncrementProduct}
                  onDecrement={this.onDecrementProduct}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default ShoppingCart;
