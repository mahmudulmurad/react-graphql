import { gql } from "@apollo/client";

//Product list
export const ProductQuery = gql`
  query Products {
    products {
      id
      name
      description
      price
      stock
    }
  }
`;

//Create Product
export const CreateProductMutation = gql`
  mutation CreateProduct(
    $name: String!
    $description: String!
    $price: numeric!
    $stock: Int!
  ) {
    insert_products_one(
      object: {
        name: $name
        description: $description
        price: $price
        stock: $stock
      }
    ) {
      id
      name
      price
      stock
      description
    }
  }
`;
