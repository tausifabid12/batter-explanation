import React from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext } from "react";
import { useState } from "react";

const auth = getAuth(app);
export const AuthContext = createContext();

const ProviderContext = () => {
  const [user, setUser] = useState();
  const [loading, serLoadin] = useState();
  return <div></div>;
};

export default ProviderContext;
