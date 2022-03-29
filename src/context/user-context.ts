import { createContext } from "react";
import User from "../@Types/User";

const user = {
  firstName: "Bayrem",
  lastName: "Sayeh",
} as User;

export interface UserContextType {
  user?: User;
  isLoading: boolean;
}

export const UserContextDefaultValue: UserContextType = {
  user: user,
  isLoading: false,
};

export const UserContext = createContext<UserContextType>(
  UserContextDefaultValue
);
