import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useFetchSearchResults = (searchQuery) => {
  const [products, setProducts] = useState("");
  const navigate = useNavigate();
  const fetchProductDetails = async () => {
    try {
      const data = await fetch(
        "https://fakestoreapi.com/products/category/" + searchQuery
      );
      const res = await data.json();
      if (res.length === 0) {
        navigate("/");
      }
      setProducts(res);
    } catch (error) {
      console.log("error", error);
      navigate("/");
    }
  };
  useEffect(() => {
    if (products[0]?.category !== searchQuery) {
      fetchProductDetails();
    }
  });
  return products;
};
export default useFetchSearchResults;
