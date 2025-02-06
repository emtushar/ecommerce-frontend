import React, { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatToIndianCurrency } from "../helpers/helper";
// import { useDispatch } from "react-redux";
// import { removeWishlist, setWishlist } from "../store/slices/appSlice";
function ProductCard({ title, rating, img, price, id }) {
  const [liked, setLiked] = useState(false);
  // const dispatch = useDispatch();
  const handleLike = () => {
    setLiked(!liked);
    // if (liked) {
    //   dispatch(setWishlist({ title, rating, img, price: price * 80, id }));
    // } else if (!liked) {
    //   dispatch(removeWishlist(id));
    // }
  };
  return (
    <div className=" bg-white  overflow-hidden shadow-lg rounded-md  flex flex-col   items-center w-[194px] h-[320px] lg:w-[300px] lg:h-[420px]">
      <Link to={"/product/" + id}>
        <img
          className="hover:cursor-pointer  w-[170px]  lg:w-[300px] object-contain p-2  h-[240px] lg:h-[340px]"
          src={
            img ||
            "https://png.pngtree.com/png-vector/20210221/ourlarge/pngtree-error-404-not-found-neon-effect-png-image_2928214.jpg"
          }
          alt={"product-" + id}
        />
      </Link>
      <div className="  border-t-2 bg-amber-50 border-amber-200 w-full  flex flex-col  justify-center px-4  h-[5rem]">
        <h2 className=" truncate text-lg lg:text-xl   text-stone-600 font-sans">
          {title}
        </h2>
        <div className="flex     justify-between text-base lg:text-lg  items-center  text-black">
          <h3 className="flex justify-center items-center gap-2 ">
            <FaStar />
            {rating}
          </h3>
          <h3 className=" text-xl font-sans font-medium">
            Rs.{formatToIndianCurrency(Math.floor(price * 80))}
          </h3>
          <button className=" hover:cursor-pointer" onClick={handleLike}>
            {liked ? (
              <FaHeart color="red" size={24} />
            ) : (
              <FaHeart color="grey" size={24} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
