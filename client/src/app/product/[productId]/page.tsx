import Container from "@/components/Container";
import { product } from "@/utils/product";
import React from "react";
import ProductDetails from "./ProductDetails";

interface IParams {
  productId?: number;
}

const Product = ({ params }: { params: IParams }) => {
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} id={params.productId || 0} />
      </Container>
    </div>
  );
};

export default Product;
