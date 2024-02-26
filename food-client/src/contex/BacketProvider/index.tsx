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

// interface IBacket {
//   _id : string;
//   name: string;
//   foods: 
// }

interface IBacketContext {
  // backets: IBacket[];
}

export const BacketContext = createContext<IBacketContext>(
  {} as IBacketContext
);

const BacketProvider = ({ children }: PropsWithChildren) => {
  const [backets, setBackets] = useState([]);

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


const [food, setFood]=useState({
  foodId:"",
  price:""
})

const handleChangeFood = (e: ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;

  setFood({ ...food, [name]: value });

};

  const createBasket = async () => {
    try {
      const foodData = new FormData()
      foodData.set("foodId", food.foodId);
      foodData.set("price", food.price)
     await axios.post("http://localhost:8080/backet",{foodData})

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
