import React from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import app from "../firebase/firebase.config";

// getting auth and creating auth context
const auth = getAuth(app);
export const AuthContext = createContext();

const ProviderContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //creating user
  const createUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  //signing in user
  const logInUser = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const googleLogIn = (provider) => {
    return signInWithPopup(auth, provider);
  };

  //logging out user

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // tracing user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    logInUser,
    logOut,
    googleLogIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default ProviderContext;
