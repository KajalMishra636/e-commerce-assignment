import React, { createContext, useContext, useState } from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartContextType {
  cart: Product[];
  addToCart: (p: Product) => void;
  removeFromCart: (id: number) => void;
  isDrawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const addToCart = (p: Product) => {
    setCart((prev) => [...prev, p]);
    setDrawerOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isDrawerOpen, setDrawerOpen }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};