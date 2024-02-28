"use client";
import React, {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { UserContext } from "../UserProvider";
import axios from "axios";

interface IBacket {
  food: string;
  quantity: number;
  _id: string;
  name: string;
  desc: string;
  price: number;
  image: string;
  discountPrice?: number;
  category: object;
  isSale: boolean;
}

interface IBacketContext {
  backets: IBacket[];
}

export const BacketContext = createContext<IBacketContext>(
  {} as IBacketContext
);

const BacketProvider = ({ children }: PropsWithChildren) => {
  const [backets, setBackets] = useState([]);

  const [food, setFood] = useState({
    food: "",
    quantity: "",
    totalPrice: "",
  });

  const handleChangeFood = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFood({ ...food, [name]: value });
  };

  const createBasket = async () => {
    try {
      const foodData = new FormData();
      foodData.set("price", food.totalPrice);
      await axios.post("http://localhost:8080/backet", { foodData });

      setBackets(backets);
    } catch (error: any) {
      console.log("ERR", error);
    }
  };

  const getBacket = async () => {
    try {
      const {
        data: { backets },
      } = (await axios.get("http://localhost:8080/backet")) as {
        data: { backets: [] };
      };

      setBackets(backets);
    } catch (error: any) {
      console.log("ERR", error);
    }
  };

  useEffect(() => {
    getBacket();
  }, []);

  return (
    <BacketContext.Provider value={{ backets }}>
      {children}
    </BacketContext.Provider>
  );
};

export default BacketProvider;
