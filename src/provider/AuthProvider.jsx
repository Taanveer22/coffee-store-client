//===================== Here are the steps for setting up Firebase Authentication with React Context:==================================

// STEP 1: Create a context to share authentication data/functions.
// STEP 2: Create a provider component to wrap the app.
// STEP 3: Create state to store the logged-in user.
// STEP 4: Create state to track loading/auth process status.
// STEP 5: Create firebase functions for various purposes (Register, Sign In, etc.).
// STEP 6: Must listen to firebase auth state (using an observer).
// STEP 7: Prepare the values to be shared via context.
// STEP 8: Provide auth data/functions to all child components.

// ===================================================================

import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

// 01
const AuthContext = createContext(null);

// 02
const AuthProvider = ({ children }) => {
  // 03
  const [user, setUser] = useState(null);
  // 04
  const [loading, setLoading] = useState(true);

  // 05
  const provider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  //Update Profile (NO manual setUser)
  const updateProfileData = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // 06
  //  Observe auth state (Single source of truth)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // 07
  const authInfo = {
    user,
    loading,
    googleSignIn,
    registerUser,
    signInUser,
    signOutUser,
    updateProfileData,
  };

  // 08
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
