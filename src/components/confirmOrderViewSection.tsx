'use cleint'

import Image from "next/image";
import { useCart } from "@/context/cartContext";

export default function ConfirmOrderViewSection({ onClose }: { onClose: () => void }) {

  const { cart, clearCart } = useCart()
  const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0).toFixed(2)
  const clearAndStartNewOrder = () => {
    clearCart();
    onClose();
  }

  return (
    <div className="bg-white rounded-xl w-full p-6 lg:max-w-md">
      {/* header */}
      <div>
        <Image src="/images/icon-order-confirmed.svg" alt="icon-order-confirmed" width={45} height={45} className="py-4" />

        <h1 className="text-4xl font-bold py-3 lg:text-3xl lg:py-1">
          Order <br className="lg:hidden" />
          Confirmed
        </h1>

        <p className="text-sm text-[#c9aea6]">We hope you enjoy your food!</p>
      </div>

      {/* order summary */}
      <div className="bg-[#fcf9f7] rounded-xl px-6 my-6">
        {cart.map((item) => (
          <div key={item.title} className="flex items-center justify-between border-b border-[#f4edeb] py-3">
            <div className="flex items-center gap-3">
              <Image
                src={item.image || "/images/default.jpg"}
                alt={item.title}
                width={40}
                height={40}
                className="rounded-md"
              />

              <div>
                <p className="text-xs font-semibold">{item.title}</p>
                <div className="flex items-center gap-2">
                  <p className="text-xs font-bold text-[#c73a0f]">{item.quantity}x</p>
                  <p className="text-xs font-bold text-[#c9aea6]">@(${item.price.toFixed(2)})</p>
                </div>
              </div>
            </div>

            <p className="text-sm font-semibold text-right self-center">${(item.quantity * item.price).toFixed(2)}</p>
          </div>
        ))}
        <div className="flex justify-between items-center py-3">
          <p className="text-sm font-semibold tex-[#87635a] lg:text-xs lg:font-normal">Order Total</p>
          <h2 className="text-2xl font-bold lg:text-lg">${totalPrice}</h2>
        </div>
      </div>

      <button
        type="button"
        onClick={clearAndStartNewOrder}
        className="bg-[#c73a0f] text-white rounded-full py-3 w-full hover:bg-[#772309]">
        Start New Oreder
      </button>
    </div>
  )
}
