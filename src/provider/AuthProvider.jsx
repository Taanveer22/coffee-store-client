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
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

// 01
const AuthContext = createContext();

// 02
const AuthProvider = ({ children }) => {
  // 03
  const [user, setUser] = useState(null);
  // 04
  const [loading, setLoading] = useState(true);

  // 05
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // 06
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  // 07
  const authInfo = {
    user,
    loading,
    registerUser,
  };

  // 08
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
