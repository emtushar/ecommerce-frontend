import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useFetchProductDetails = (productId) => {
  const [productDetails, setProductDetails] = useState("");
  const navigate = useNavigate();
  const fetchProductDetails = async () => {
    try {
      const data = await fetch(
        "https://fakestoreapi.com/products/" + productId
      );
      const res = await data.json();

      setProductDetails(res);
    } catch (error) {
      console.log("error", error);
      navigate("/");
    }
  };

  useEffect(() => {
    if (productDetails) return;
    fetchProductDetails();
  });

  return productDetails;
};

export default useFetchProductDetails;
