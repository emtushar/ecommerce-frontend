import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const useFetchProductList = () => {
  const [products, setProducts] = useState();
  const sortingDigit = useSelector((state) => state.app.sortingDigit);
  const fetchProductDetails = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products");
      const res = await data.json();
      console.log(res);
      if (sortingDigit === 2) {
        res.sort((a, b) => a.price - b.price);
      } else if (sortingDigit === 3) {
        res.sort((a, b) => b?.rating?.rate - a?.rating?.rate);
      }
      console.log("sortingDigit", sortingDigit);
      console.log("res", res);

      setProducts(res);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchProductDetails();
    return () => setProducts("");
  }, [sortingDigit]);
  return [products];
};
export default useFetchProductList;
