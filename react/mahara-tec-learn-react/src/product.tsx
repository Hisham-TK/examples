import * as React from "react";

export interface ProductProps {
  product: { id: number; name: string; count: number };
}

export interface ProductState {
  name: string;
  count: number;
}

class Product extends React.Component<ProductProps, ProductState> {
  state = {
    id: this.props.product.id,
    name: this.props.product.name,
    count: this.props.product.count,
  };
  incrementHandler = (num = 1) => {
    this.setState({ count: this.state.count + num });
  };

  decrementHandler = (num = 1) => {
    if (this.state.count) this.setState({ count: this.state.count - num });
  };
  render() {
    return (
      <React.Fragment>
        <th scope="row">{this.state.id}</th>
        <td>{this.state.name}</td>
        <td>{this.state.count}</td>

        <td>
          <button
            className="btn btn-primary mr-2"
            onClick={() => this.incrementHandler()}
          >
            +
          </button>

          <button
            className="btn btn-danger"
            onClick={() => this.decrementHandler()}
          >
            -
          </button>
        </td>
      </React.Fragment>
    );
  }
}

export default Product;
