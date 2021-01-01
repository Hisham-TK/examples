import * as React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

/* Interfaces */
export interface IProduct {
  id: number;
  name: string;
  count: number;
}

export interface ProductProps {
  product: IProduct;
  onDelete: (product: IProduct) => void;
  onIncrement: (product: IProduct) => void;
  onDecrement: (product: IProduct) => void;
}

export interface ProductState {}

class Product extends React.Component<ProductProps, ProductState> {
  state = {};

  render() {
    return (
      <React.Fragment>
        <th scope="row">{this.props.product.id}</th>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.count}</td>

        <td>
          <button
            className="btn btn-primary m-1"
            onClick={() => this.props.onIncrement(this.props.product)}
          >
            <i className="fas fa-plus"></i>
            {/* <FontAwesomeIcon icon={faPlus} /> */}
          </button>
          <button
            className="btn btn-warning m-1"
            style={{ opacity: this.props.product.count ? 1 : 0 }}
            onClick={() => this.props.onDecrement(this.props.product)}
          >
            <i className="fas fa-minus"></i>
            {/* <FontAwesomeIcon icon={faMinus} /> */}
          </button>
          <button
            className="btn btn-danger m-1"
            onClick={() => this.props.onDelete(this.props.product)}
          >
            <i className="fas fa-trash"></i>
            {/* <FontAwesomeIcon icon={faTrash} /> */}
          </button>
        </td>
      </React.Fragment>
    );
  }
}

export default Product;
