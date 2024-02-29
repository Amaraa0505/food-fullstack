"use client";

import { Try } from "@mui/icons-material";
import axios from "axios";
import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const BasketContext = createContext({} as object);

interface IBasket {
  foodId: string;
  quantity: number;
  totalPrice: number;
}
interface IBasketContext {
  basketData: IBasket[];
}

export const CategoryContext = createContext<IBasketContext>(
  {} as IBasketContext
);

export const BasketProvider = ({ children }: PropsWithChildren) => {
  const [basketData, setBasketData] = useState([]);

  const getBasket = async () => {
    try {
      const {
        data: { basketData },
      } = (await axios.get("http://localhost:8080/backet")) as {
        data: { basketData: [] };
      };

      setBasketData(basketData);
    } catch (error) {
      alert("ERR");
    }
  };

  useEffect(() => {
    getBasket();
  });

  return (
    <BasketContext.Provider value={{ basketData }}>
      {children}
    </BasketContext.Provider>
  );
};
