"use client";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";

import axios from "axios";

interface ICategory {
  _id: string;
  name: string;
}
  
interface ICategoryContext {
  categories: ICategory[];
  chosenCategory: string;
  HandleClickCategory: (id: string) => void;
}

export const CategoryContext = createContext<ICategoryContext>(
  {} as ICategoryContext
);

export const CategoryProvider = ({ children }: PropsWithChildren) => {
  const [categories, setCategories] = useState([]);
  const [chosenCategory, setChosenCategory] = useState(
    
  );

  const getCategory = async () => {
    try {
      const {
        data: { categories },
      } = (await axios.get("http://localhost:8080/categories")) as {
        data: { categories: [] };
      };

      setCategories(categories);
    } catch (error: any) {
      alert("Get Error - " + error.message);
    }
  };
  const HandleClickCategory = (id: string) => {
    setChosenCategory(id);
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <CategoryContext.Provider
      value={{ categories, HandleClickCategory, chosenCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
