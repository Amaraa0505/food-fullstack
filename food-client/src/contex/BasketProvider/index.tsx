"use client";

import axios from "axios";
import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const BasketContext = createContext({} as object);

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDQ3ZmVjZGE2MGQxYjM0YmViMmExZiIsImlhdCI6MTcwOTU1NDE1NiwiZXhwIjoxNzA5NjQwNTU2fQ.Q7utKbLTLIw9zgmdnQ2JJH36h7Wqp7i3g9ZmQEF1rQg";

const createReq = async (url: string, foodItem: any) => {
  const { data } = (await axios.post(url, foodItem, {
    headers: { Authorization: `Bearer ${token}` },
  })) as {
    data: any;
  };
  return { basket: data.basket, message: data.message };
};

export const BasketProvider = ({ children }: PropsWithChildren) => {
  const [basket, setBasket] = useState<{} | null>(null);
  const [refetch, setRefetch] = useState<boolean>(false);

  const addFoodToBasket = async (foodItem: any) => {
    console.log("Food-Add-2", foodItem);
    try {
      const { basket, message } = await createReq(
        "http://localhost:8080/backet",
        foodItem
      );
      console.log("RES-add", basket);
      setBasket({ ...basket });
      toast.success(message);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const updateFoodToBasket = async (foodItem: any) => {
    console.log("Foodup", foodItem);
    try {
      const { basket } = await createReq(
        "http://localhost:8080/backet",
        foodItem
      );
      console.log("RES", basket);
      setBasket({ ...basket });
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const deleteFoodFromBasket = async (foodId: string) => {
    console.log("Fooddel", foodId);
    try {
      const { data } = await axios.delete(
        `http://localhost:8080/backet/${foodId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("RES", data?.basket);
      // setBasket({ ...data?.basket });
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const getFoodBasket = async () => {
    try {
      const { data } = (await axios.get("http://localhost:8080/backet", {
        headers: { Authorization: `Bearer ${token}` },
      })) as {
        data: any;
      };
      console.log("RESs", data);
      setBasket({ ...data?.basket });
      // toast.success(data.message);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getFoodBasket();
  }, []);

  return (
    <BasketContext.Provider
      value={{
        basket,
        addFoodToBasket,
        updateFoodToBasket,
        deleteFoodFromBasket,
        getFoodBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
