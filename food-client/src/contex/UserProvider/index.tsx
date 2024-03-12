"use client";

import axios from "axios";
import { PropsWithChildren, createContext, useState, useEffect,  } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

interface IUser {
  name: string;
  email: string;
  address?: string;
  avatarUrl?: string;
  orders: [];
}

interface IUserContext {
  user: IUser;
  token: string | null;
  login: (name: string, password: string) => void;
}

export const UserContext = createContext<IUserContext>({
  
  user: {
    name: "",
    email: "",
    address: "",
    orders: [],
  },
  token: "",
  login: function () {},
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    address: "",
    avatarUrl: "",
    orders: [],
  });

  console.log("user", user);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      console.log("Login", email, password);
      const { data } = await axios.post("http://localhost:8080/auth/login", {
        userEmail: email,
        userPassword: password,
      });
      console.log("data", data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
      setToken(data.token);
      router.push("/")
      toast("amjilttai nevterlee")
    } catch (error) {
      toast.error("Error");
    }
  };

  return (
    <UserContext.Provider value={{ user, login, token }}>
      {children}
    </UserContext.Provider>
  );
};
