import { Minus, Plus } from "lucide-react";
import { FaStar, FaTrashAlt } from "react-icons/fa";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeProduct,
  clearCart,
} from "../store/slices/cartSlice";
import { addOrder } from "../store/slices/orderSlice";
import { Link, useNavigate } from "react-router-dom";
import { formatToIndianCurrency } from "../helpers/helper";

function ShoppingCart() {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalMRP = cartProducts.reduce((acc, product) => {
    return acc + Math.floor(product.price * 80 * product.quantity);
  }, 0);

  const platformFee = totalMRP ? 20 : 0;
  const shippingFee = totalMRP ? 100 : 0;
  const discount = Math.floor(totalMRP * 0.1);
  const totalPrice = totalMRP - discount + shippingFee + platformFee;
  const handleIncrement = (id) => {
    if (cartProducts.find((product) => product.id === id).quantity < 10) {
      dispatch(incrementQuantity(id));
    }
  };
  const handleDecrement = (id) => {
    if (cartProducts.find((product) => product.id === id).quantity > 1) {
      dispatch(decrementQuantity(id));
    }
  };

  const handlePlaceOrder = () => {
    if (cartProducts.length) {
      dispatch(
        addOrder({
          products: cartProducts,
          totalPrice,
          totalMRP,
          shippingFee,
          platformFee,
          discount,
        })
      );
      dispatch(clearCart());
      navigate("/checkout");
    } else {
      navigate("/cart");
    }
  };

  return (
    <div className="">
      {cartProducts ? (
        <div className="flex   lg:p-4 w-full ">
          <div className="lg:w-2/3 w-full p-4">
            <div className=" w-full h-[500px] flex flex-col lg:hidden  justify-around lg:flex-col bg-[#f5f5f5] p-8 rounded-md">
              <h1 className="text-lg font-serif">Bill Summary</h1>
              <div className="flex flex-col gap-2 border-b-2 text-base text-stone-700 border-stone-300 p-4">
                <div className="flex  justify-between">
                  <span className="font-serif">Total MRP</span>
                  <span>₹ {formatToIndianCurrency(totalMRP)}</span>
                </div>
                <div className="flex  justify-between">
                  <span className="font-serif">
                    Discount <span className=" font-sans ">(10%)</span>{" "}
                  </span>
                  <span>- ₹ {formatToIndianCurrency(discount)}</span>
                </div>
                <div className="flex  justify-between">
                  <span className="font-serif">Shipping Fee</span>
                  <span>₹ {formatToIndianCurrency(shippingFee)}</span>
                </div>

                <div className="flex  justify-between">
                  <span className="font-serif">Platform Fee</span>
                  <span>₹ {formatToIndianCurrency(platformFee)}</span>
                </div>
              </div>
              <h2 className="text-xl flex justify-between">
                <span className="font-serif">Total Price</span>
                <span>Rs.{formatToIndianCurrency(totalPrice)}</span>
              </h2>
              <button
                className="text-xl py-4 mx-auto w-48  bg-amber-300 hover:cursor-pointer hover:bg-amber-400 transition-all text-amber-50 rounded"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
            {cartProducts.length ? (
              cartProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex w-full  border-b-2 border-stone-400  m-2 items-center"
                >
                  <div className=" bg-white mr-6  object-contain lg:p-4">
                    <img
                      className="w-40 "
                      src={product.img}
                      alt={"product-" + product.id}
                    />
                  </div>
                  <div className="flex flex-col gap-6  w-full justify-center h-full p-6">
                    <h1 className="text-xl lg:text-2xl">{product.title}</h1>

                    <h1 className="text-base lg:text-lg flex gap-2 items-center text-stone-700">
                      <FaStar /> {product.rating}
                    </h1>

                    <div className="flex   w-full items-center justify-between gap-4">
                      <div className="text-xl flex  gap-2   rounded-md">
                        <button
                          className="hover:cursor-pointer bg-[#f5f5f5]  rounded-full p-1"
                          onClick={() => handleDecrement(product.id)}
                        >
                          <Minus size={18} />
                        </button>
                        {product.quantity}
                        <button
                          className="hover:cursor-pointer bg-[#f5f5f5]  rounded-full p-1"
                          onClick={() => {
                            handleIncrement(product.id);
                          }}
                        >
                          <Plus size={18} />
                        </button>
                      </div>
                      <div>
                        <button
                          className="hover:cursor-pointer bg-[#f5f5f5]  rounded-full p-2"
                          onClick={() => dispatch(removeProduct(product.id))}
                        >
                          <FaTrashAlt size={18} />
                        </button>
                      </div>
                    </div>

                    <h1 className="text-xl">
                      Rs.
                      {formatToIndianCurrency(Math.floor(product.price * 80))}
                    </h1>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <h2>No products in cart</h2>
                <Link to={"/"}>
                  <button className=" mt-6 hover:cursor-pointer text-xl py-2 mx-auto w-32  bg-amber-200 transition-all hover:bg-amber-300 text-amber-50 rounded">
                    Shop Now
                  </button>
                </Link>
              </div>
            )}
          </div>
          <div className=" w-1/3 h-[500px] hidden lg:flex justify-around lg:flex-col bg-[#f5f5f5] p-8 rounded-md">
            <h1 className="text-2xl font-serif">Bill Summary</h1>
            <div className="flex flex-col gap-4 border-b-2 text-lg text-stone-700 border-stone-300 p-4">
              <div className="flex  justify-between">
                <span className="font-serif">Total MRP</span>
                <span>₹ {formatToIndianCurrency(totalMRP)}</span>
              </div>
              <div className="flex  justify-between">
                <span className="font-serif">
                  Discount <span className=" font-sans ">(10%)</span>{" "}
                </span>
                <span>- ₹ {formatToIndianCurrency(discount)}</span>
              </div>
              <div className="flex  justify-between">
                <span className="font-serif">Shipping Fee</span>
                <span>₹ {formatToIndianCurrency(shippingFee)}</span>
              </div>

              <div className="flex  justify-between">
                <span className="font-serif">Platform Fee</span>
                <span>₹ {formatToIndianCurrency(platformFee)}</span>
              </div>
            </div>
            <h2 className="text-xl flex justify-between">
              <span className="font-serif">Total Price</span>
              <span>Rs.{formatToIndianCurrency(totalPrice)}</span>
            </h2>
            <button
              className="text-xl py-4 mx-auto w-48  bg-amber-300 hover:cursor-pointer hover:bg-amber-400 transition-all text-amber-50 rounded"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      ) : (
        <h2>No products in cart</h2>
      )}
    </div>
  );
}

export default ShoppingCart;
