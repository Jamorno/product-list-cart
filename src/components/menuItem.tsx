'use client'

import Image from "next/image"
import QuantityButton from "./quantityButton"
import { Red_Hat_Text } from "next/font/google";
import { useCart } from "@/context/cartContext";

const redHat = Red_Hat_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"]
})

export default function MenuItem({ imageMobile, imageDesktop, imageThumbnail, altImage, typeDessert, title, price }: {
  imageMobile: string;
  imageDesktop: string;
  imageThumbnail: string;
  altImage: string;
  typeDessert: string;
  title: string;
  price: string;
}) {

  const { cart } = useCart();
  const isInCart = cart.some(item => item.title === title)

  return (
    <div className="w-full py-6">
      <div className={`relative w-full h-50 overflow-visible aspect-auto lg:pb-[100%] ${isInCart ? "ring-2 ring-red-500 rounded-xl" : ""}`}>
        {/* image wrapper */}
        <div className="inset-0 overflow-hidden">
          <Image
            src={imageMobile}
            alt={altImage}
            fill
            className="object-cover rounded-xl lg:hidden"
          />

          <Image
            src={imageDesktop}
            alt={altImage}
            fill
            className="object-cover hidden lg:block lg:rounded-lg"
          />
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <QuantityButton title={title} price={parseFloat(price)} image={imageThumbnail} />
        </div>
      </div>

      <div className={`${redHat.className} pt-6`}>
        <p className="text-xs text-gray-400">{typeDessert}</p>
        <h3 className="text-sm font-semibold py-1">{title}</h3>
        <p className="text-sm font-semibold text-[#c73a0f]">${price}</p>
      </div>
    </div>
  )
}
