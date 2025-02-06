import React from "react";
import useFetchSearchResults from "../hooks/useFetchSearchResults";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";

function SearchPage() {
  const { category } = useParams();
  const products = useFetchSearchResults(category);
  return (
    <div className=" flex  flex-wrap justify-center  gap-1   lg:gap-6 ">
      {products ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            img={product.image}
            price={product.price}
            rating={product?.rating?.rate}
            title={product.title}
          />
        ))
      ) : (
        <h2>There has problem while fetching data from fake api store</h2>
      )}
    </div>
  );
}

export default SearchPage;
