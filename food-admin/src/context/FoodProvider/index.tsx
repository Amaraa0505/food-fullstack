"use client";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { toast } from "react-toastify";

interface IFood {
  _id: string;
  name: string;
  desc: string;
  price: number;
  image: string;
  discountPrice?: number;
  category: object;
  isSale: boolean;
}

interface IFoodContext {
  foods: IFood[];
  getFood: () => Promise<void>;
}

export const FoodContext = createContext<IFoodContext>({} as IFoodContext);

export const FoodProvider = ({ children }: PropsWithChildren) => {
  const [foods, setFoods] = useState([]);

  const getFood = async () => {
    try {
      const {
        data: { foods },
      } = (await axios.get("http://localhost:8080/food")) as {
        data: { foods: [] };
      };

      setFoods(foods);
    } catch (error: any) {
      toast.error("Error" + error.message);
    }
  };

  useEffect(() => {
    getFood();
  }, []);

  return (
    <FoodContext.Provider value={{ foods, getFood }}>
      {children}
    </FoodContext.Provider>
  );
};
