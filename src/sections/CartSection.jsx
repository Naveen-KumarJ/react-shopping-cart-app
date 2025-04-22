import React, { useEffect, useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
const CartSection = ({ productDetails, setProductDetails }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalAmount = productDetails.reduce((acc, product) => {
      return acc + (Number(product.quantity) * Number(product.price.slice(2)));
    },0);
    setTotal(totalAmount);
  }, [productDetails]);

  function handleRemove(id) {
    setProductDetails((prev) => {
      const updatedDetails = prev.filter((product) => product.id != id);
      return updatedDetails;
    });
  }

  const handleIncrementDecrement = (id, operation) => {
    setProductDetails((prev) => {
      const updatedDetails = prev
        .map((product) => {
          if (product.id == id) {
            return {
              ...product,
              quantity:
                operation === "+" ? product.quantity + 1 : product.quantity - 1,
            };
          }
          return product;
        })
        .filter((product) => product.quantity != 0);
      return updatedDetails;
    });
  };
  return (
    <section className="bg-purple-400 rounded-md mt-6 mb-6 py-4 flex flex-col gap-10">
      <h1 className="text-center font-semibold text-3xl text-slate-800">
        Your Bag
      </h1>
      <div className="flex flex-col gap-3 p-5">
        {productDetails &&
          productDetails.map((productInfo) => (
            <div
              key={productInfo.id}
              className="flex gap-6 justify-between items-center bg-neutral-100 px-4 py-2 rounded-md"
            >
              <div className="w-20 aspect-square rounded-md">
                <img
                  src={productInfo.image}
                  className="w-full h-full object-contain rounded-md"
                  alt="gadgets"
                />
              </div>
              <div className="flex-1">
                <p className="text-gray-600">{productInfo.name}</p>
                <p className="text-sm">{productInfo.price}</p>
                <p
                  className="text-xs text-purple-700 cursor-pointer hover:text-purple-900"
                  onClick={() => handleRemove(productInfo.id)}
                >
                  remove
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <IoIosArrowUp
                  className="cursor-pointer font-bold"
                  onClick={() => handleIncrementDecrement(productInfo.id, "+")}
                />
                <span>{productInfo.quantity}</span>
                <IoIosArrowDown
                  className="cursor-pointer font-bold"
                  onClick={() => handleIncrementDecrement(productInfo.id, "-")}
                />
              </div>
            </div>
          ))}
      </div>
      <div className="flex flex-col items-center">
        <div className="flex justify-between px-5 py-4 border-t-2 border-white w-full">
          <p className="font-semibold">Total</p>
          <p className="bg-white px-2 rounded-md font-semibold">₹ {total.toFixed(2)}</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold px-4 py-1 rounded" onClick={()=>setProductDetails([])}>
          Clear Cart
        </button>
      </div>
    </section>
  );
};

export default CartSection;
