import { useContext } from "react";
import { UserContext } from "../context/Usuario";

export const useUsers = () => {
  return useContext(UserContext);
};
