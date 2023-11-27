import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Config/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      //   const userEmail = currentUser?.email || user?.email;
      //   const loggedUser = { email: userEmail };
      setUser(currentUser);
      setLoading(false);
      //   if (currentUser) {
      //     axios
      //       .post("https://tranquoasis-server.vercel.app/jwt", loggedUser, {
      //         withCredentials: true,
      //       })
      //       .then((res) => {
      //         console.log("token response", res.data);
      //       });
      //   } else {
      //     axios
      //       .post("https://tranquoasis-server.vercel.app/logout", loggedUser, {
      //         withCredentials: true,
      //       })
      //       .then((res) => {
      //         console.log(res.data);
      //       });
      //   }
    });

    return () => {
      unSubscribe();
    };
  }, [user?.email]);

  const authInfo = {
    user,
    createUser,
    logOut,
    signIn,
    loading,
    googleLogin,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
