import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setTimeout(() => setLoading(false), 1000);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  console.log(user);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const profileUpdate = ({ displayName, photoURL }) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };

  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const emailLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const githubLogin = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const logout = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    profileUpdate,
    verifyEmail,
    emailLogin,
    googleLogin,
    githubLogin,
    forgetPassword,
    logout,
  };
  return <AuthContext value={authInfo}>{children} </AuthContext>;
};

export default AuthProvider;
