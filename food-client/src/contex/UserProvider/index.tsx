"use client";
import { Password } from "@mui/icons-material";
import { PropsWithChildren, createContext } from "react";
import { useState } from "react";

interface IUser {
  name: string;
  email: string;
  address: string;
  password: string;
  rePassword?: string;
}
interface IUserContext {
  user: IUser;
  login: (name: string, password: string) => void; ///
}

interface IUserContext {
  user: IUser;
  signup: (
    name: string,
    password: string,
    email: string,
    address: string,
    rePassword?: string
  ) => void;
}

export const UserContext = createContext<IUserContext>({
  user: { name: "", email: "", password: "", address: "" },
  signup: function (): void {},
  login: function (): void {},
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    address: "",
    password: "",
    rePassword: "",
  });

  const signup = (
    email: string,
    password: string,
    address: string,
    name: string
  ): void => {}; //////

  const login = (email: string, password: string): void => {};

  return (
    <UserContext.Provider value={{ user, login, signup }}>
      {children}
    </UserContext.Provider>
  );
};
