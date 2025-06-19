'use client'

import Image from "next/image";
import { useCart } from "@/context/cartContext";
import { useState } from "react";
import ConfirmOrderViewSection from "./confirmOrderViewSection";

export default function CartViewSection() {

  const { cart, removeItem } = useCart();
  const totalItem = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0).toFixed(2);
  const [showConfirmOrder, setComfirmOrder] = useState(false)

  return (
    <div className="bg-white rounded-xl p-6 self-start">
      <h2 className="text-2xl font-bold text-[#c73a0f] pb-4">
        Your Cart({totalItem})
      </h2>

      {totalItem == 0 ? (
        <div className="text-center mt-6">
          <Image src="/images/illustration-empty-cart.svg" alt="emptyCart" width={120} height={120}
            className="mx-auto" />
          <p className="text-sm text-[#ad8985] font-semibold">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.title} className="border-b border-[#f4edeb] py-3">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-sm font-semibold">{item.title}</p>
                  <div className="flex gap-2 items-center w-full">
                    <p className="text-xs font-bold text-[#c73a0f]">{item.quantity}x</p>
                    <p className="text-xs font-bold text-[#c9aea6]">@(${item.price.toFixed(2)})</p>
                    <p className="text-sm font-semibold text-[#87635a]">${(item.quantity * item.price).toFixed(2)}</p>
                  </div>
                </div>

                <button onClick={() => removeItem(item.title)}
                  className="flex items-center justify-center text-[#c9aea6] font-bold self-center rounded-full w-5 h-5 border-2 hover:text-[#c73a0f]">
                  x
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold tex-[#87635a]">Order Total</p>
              <h3 className="text-2xl font-bold">${totalPrice}</h3>
            </div>

            <div className="bg-[#f4edeb] rounded-xl text-center flex justify-center items-center gap-2 p-3 my-6">
              <Image src="/images/icon-carbon-neutral.svg" alt="carbon-neutral" width={20} height={20}
                className="" />
              <span className="text-xs">This is a<strong>carbon-neutral</strong>delivery</span>
            </div>

            <button onClick={() => setComfirmOrder(true)}
              className="bg-[#c73a0f] text-white rounded-full py-3 w-full hover:bg-[#772309]">
              Confirm Order
            </button>
          </div>
        </div>
      )}

      {showConfirmOrder && (
        <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50 lg:items-center">
          <div className="max-h-[90vh] w-full overflow-y-auto scroll-hidden lg:max-w-xl lg:rounded-xl lg:p-8 lg:w-full">
            <ConfirmOrderViewSection onClose={() => setComfirmOrder(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
