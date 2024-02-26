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
  _id : string;
  name: string;
  foods: 
}

interface IBacketContext {
  backets: IBacket[];
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
