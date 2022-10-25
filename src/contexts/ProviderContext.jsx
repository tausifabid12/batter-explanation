import React from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext } from "react";
import { useState } from "react";

const auth = getAuth(app);
export const AuthContext = createContext();

const ProviderContext = () => {
  const [user, setUser] = useState();
  const [loading, serLoadin] = useState();

  //creating user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //siningin in  user
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  return <div></div>;
};

export default ProviderContext;
