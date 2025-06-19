'use client'

import Image from "next/image";
import { useCart } from "@/context/cartContext";

export default function QuantityButton({ title, price, image }: { title: string; price: number; image: string; }) {

  const { cart, addItem, removeItem } = useCart();

  const existingItem = cart.find(item => item.title === title);
  const quantity = existingItem ? existingItem.quantity : 0;

  const addToCart = () => {
    addItem({ title, price, quantity: 1, image });
  }

  const decreaseToCart = () => {
    if (quantity <= 1) {
      removeItem(title);
    } else {
      addItem({ title, price, quantity: quantity - 1, image });
    }
  }

  const increaseTocart = () => {
    addItem({ title, price, quantity: quantity + 1, image });
  }

  return (
    <div>
      {quantity === 0 ? (
        <button
          type="button"
          onClick={addToCart}
          className="flex items-center justify-center gap-2 w-36 h-10 bg-white text-sm rounded-full border py-2 group hover:bg-[#c73a0f] hover:text-white transition-colors duration-200"
        >
          <Image
            src="/images/icon-add-to-cart.svg"
            alt="cart"
            width={18}
            height={18}
            className="object-contain align-middle group-hover:invert group-hover:brightness-0 transition" />
          Add to cart
        </button>
      ) : (
        <div className="flex items-center justify-between bg-[#c73a0f] text-white p-2 rounded-full w-36 h-10">
          <button
            type="button"
            onClick={decreaseToCart}
            className="w-4 h-4 border rounded-full flex items-center justify-center hover:bg-white hover:text-[#c73a0f]"
          >
            -
          </button>

          <span className="text-sm font-semibold">{quantity}</span>

          <button
            type="button"
            onClick={increaseTocart}
            className="w-4 h-4 border rounded-full flex items-center justify-center hover:bg-white hover:text-[#c73a0f]"
          >
            +
          </button>
        </div>
      )}
    </div>
  )
}
