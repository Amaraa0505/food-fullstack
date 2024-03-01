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
  let foodId = "";
  const updateBasket = async (id: string) => {
    try {
      foodId = id;
      const data = await axios.put(`http://localhost:8080/backet/`, {
        foods: { foodId: foodId },
      });

      toast.success("Хоолыг амжилттай сагсанд нэмлээ");
    } catch (error: any) {
      toast.error("Хоолыг нэмэхэд алдаа гарлаа дахин оролдоно уу", error);
      console.log("ERR CLF+++++>", error);
    } finally {
      foodId = "";
    }
  };

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
    <BasketContext.Provider value={{ basketData, updateBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
