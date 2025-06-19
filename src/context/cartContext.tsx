'use client'

import { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  title: string;
  price: number;
  quantity: number;
  image: string;
};

type CartContextType = {
  cart: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (title: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  const addItem = (item: CartItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.title === item.title);
      if (existing) {
        return prev.map(i =>
          i.title === item.title ? { ...i, ...item } : i
        );
      }

      return [...prev, item];
    });
  };

  const removeItem = (title: string) => {
    setCart(prev => prev.filter(i => i.title !== title));
  };

  const clearCart = () => {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
