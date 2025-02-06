import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../store/slices/cartSlice.js";
import { formatToIndianCurrency } from "../helpers/helper.js";
function ProductDetailCard({
  id,
  img,
  rating,
  price,
  title,
  description,
  category,
}) {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);
  const productDetails = {
    id: id,
    img: img,
    rating: rating,
    price: price,
    title: title,
    description: description,
    category: category,
    quantity: 1,
  };
  const handleAddToCart = () => {
    if (!cartProducts.find((product) => product.id === id)) {
      dispatch(addProduct(productDetails));
    }
  };

  return (
    <div className="px-2 ">
      <div className=" flex  flex-col lg:flex-row  w-full lg:items-center bg-white    ">
        <div className="w-full  lg:w-2/5 h-1/2 lg:h-full p-4 flex justify-center items-center bg-white object-contain ">
          <img className="w-3/4 h-full" src={img} alt="" />
        </div>
        <div className="w-full lg:w-3/5 flex flex-col gap-6  lg:p-10    p-4 ">
          <h2 className="text-xl lg:text-3xl">{title}</h2>
          <div className=" flex gap-8 text-2xl  items-center">
            <h3 className=" flex justify-center text-xl items-center gap-2">
              <FaStar />
              {rating}
            </h3>
            <h3>Rs.{formatToIndianCurrency(Math.floor(price * 80))}</h3>
            <h3 className="text-base lg:text-lg font-mono text-[#f5f5f5] rounded-md bg-[#a9a8a8] px-2 py-1">
              {category}
            </h3>
          </div>
          <h3 className="text-base hidden lg:flex p-4 mb-4 lg:mt-4 rounded-lg  bg-[#f5f5f5]  text-stone-700">
            {description[0].toUpperCase() + description.slice(1)}
          </h3>
          <div className="  gap-4 flex ">
            <button
              className="bg-amber-50 w-40 rounded-lg transition-all hover:bg-amber-100   hover:text-amber-600  text-xl hover:cursor-pointer  text-amber-400 px-5 py-2"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button className="bg-amber-400 transition-all hover:bg-amber-500 hover:text-amber-100  w-40 rounded-lg  text-xl hover:cursor-pointer  text-amber-50 px-5 py-2">
              Buy Now
            </button>
          </div>
          <h3 className="text-base lg:hidden p-4 lg:mt-4 rounded-lg  bg-[#f5f5f5]  text-stone-700">
            {description[0].toUpperCase() + description.slice(1)}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailCard;
