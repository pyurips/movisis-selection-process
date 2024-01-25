import { ReactNode, createContext, useState } from "react";

type MainContextType = {
  count: number;
  increment: () => void;
};

export const mainContext = createContext<MainContextType | undefined>(
  undefined
);

export const MainProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <mainContext.Provider
      value={{
        count,
        increment,
      }}
    >
      {children}
    </mainContext.Provider>
  );
};
