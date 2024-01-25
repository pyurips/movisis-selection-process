import { ReactNode, createContext, useEffect, useState } from "react";

type MainContextType = {
  cart: { id: string; quantity: number }[];
  addToCart: (value: { id: string; quantity: number }) => void;
  deleteInCart: (id: string) => void;
};

export const mainContext = createContext<MainContextType | undefined>(
  undefined
);

export const MainProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<{ id: string; quantity: number }[]>([]);

  const addToCart = (value: { id: string; quantity: number }) => {
    if (cart.find((e) => e.id === value.id)) return;
    const storedCart = localStorage.getItem("cart");
    if (!storedCart) return;
    const convertedCart = JSON.parse(storedCart);
    if (convertedCart.find((e: any) => e.id === value.id)) return;
    localStorage.setItem(
      "cart",
      JSON.stringify([...convertedCart, { id: value.id, quantity: 1 }])
    );
    return setCart((prev) => [...prev, value]);
  };

  const deleteInCart = (id: string) => {
    if (!cart.find((e) => e.id === id)) return;
    const storedCart = localStorage.getItem("cart");
    if (!storedCart) return;
    const convertedCart = JSON.parse(storedCart);
    if (!convertedCart.find((e: any) => e.id === id)) return;
    localStorage.setItem(
      "cart",
      JSON.stringify(convertedCart.filter((e: any) => e.id !== id))
    );
    return setCart((prev) => prev.filter((e) => e.id !== id));
  };

  useEffect(() => {
    const storeCart = localStorage.getItem("cart");
    if (storeCart) return setCart(JSON.parse(storeCart));
  }, []);

  return (
    <mainContext.Provider
      value={{
        cart,
        addToCart,
        deleteInCart,
      }}
    >
      {children}
    </mainContext.Provider>
  );
};
