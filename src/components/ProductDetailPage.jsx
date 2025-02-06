import React from "react";
import { useParams } from "react-router-dom";
import ProductDetailCard from "./ProductDetailCard.jsx";
import useFetchProductDetails from "../hooks/useFetchProductDetails.jsx";
function ProductDetailPage() {
  const { id } = useParams();
  const productDetails = useFetchProductDetails(id);

  return (
    <div>
      {productDetails ? (
        <ProductDetailCard
          id={productDetails.id}
          title={productDetails.title}
          price={productDetails.price}
          rating={productDetails?.rating.rate}
          img={productDetails.image}
          description={productDetails.description}
          category={productDetails.category}
        />
      ) : (
        <h2>
          There has been some problem while fetching product details from fake
          api store
        </h2>
      )}
    </div>
  );
}

export default ProductDetailPage;
