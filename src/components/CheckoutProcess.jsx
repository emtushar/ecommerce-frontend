import React, { useState } from "react";
import { ChevronRight, CreditCard, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatToIndianCurrency } from "../helpers/helper";
const CheckoutProcess = () => {
  const orders = useSelector((state) => state.order.orders);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    address: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handlePayment = () => {
    setTimeout(() => {
      setStep(4);
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {[1, 2, 3].map((num) => (
            <React.Fragment key={num}>
              <div
                className={`flex items-center ${
                  step >= num ? "text-amber-300" : "text-gray-400"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2
                  ${
                    step >= num
                      ? "border-amber-300 bg-amber-50"
                      : "border-gray-300"
                  }`}
                >
                  {step > num ? <Check size={16} /> : num}
                </div>
                <span className="ml-2 text-sm hidden sm:inline">
                  {num === 1
                    ? "Shipping"
                    : num === 2
                    ? "Payment"
                    : "Confirmation"}
                </span>
              </div>
              {num < 3 && (
                <div
                  className={`flex-1 h-0.5 mx-4 ${
                    step > num ? "bg-amber-300" : "bg-gray-300"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      {step === 1 && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Postal Code
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-amber-50 bg-amber-300 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400"
          >
            Continue to Payment <ChevronRight className="ml-2" size={16} />
          </button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Card Number
              </label>
              <div className="mt-1 relative">
                <input
                  type="number"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                  placeholder="1234 5678 9012 3456"
                  required
                />
                <CreditCard
                  className="absolute right-3 top-2.5 text-gray-400"
                  size={20}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  CVV
                </label>
                <input
                  type="number"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                  placeholder="123"
                  required
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-amber-50 bg-amber-300 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400"
          >
            Review Order <ChevronRight className="ml-2" size={16} />
          </button>
        </form>
      )}
      {step === 3 && (
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Order Summary</h3>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total MRP</span>
                <span className="text-sm font-medium text-gray-900">
                  ₹{formatToIndianCurrency(orders[0]?.totalMRP)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Discount</span>
                <span className="text-sm font-medium text-gray-900">
                  - ₹{formatToIndianCurrency(orders[0]?.discount)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Shipping Fee</span>
                <span className="text-sm font-medium text-gray-900">
                  ₹{formatToIndianCurrency(orders[0]?.shippingFee)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Platform fee</span>
                <span className="text-sm font-medium text-gray-900">
                  ₹{formatToIndianCurrency(orders[0]?.platformFee)}
                </span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-2">
                <span className="text-base font-medium text-gray-900">
                  Total
                </span>
                <span className="text-base font-medium text-gray-900">
                  Rs.{formatToIndianCurrency(orders[0]?.totalPrice)}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={handlePayment}
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-amber-50 bg-amber-300 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400"
          >
            Place Order
          </button>
        </div>
      )}

      {step === 4 && (
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <Check className="text-green-600" size={32} />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Order Confirmed!
          </h2>
          <p className="text-gray-600">
            Thank you for your order. We'll send you a confirmation email
            shortly.
          </p>
          <Link to={"/"}>
            <div className="pt-4">
              <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-amber-50 bg-amber-300 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400">
                Continue Shopping
              </button>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CheckoutProcess;
