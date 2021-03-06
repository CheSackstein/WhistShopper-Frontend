import React, { useContext, useState, useEffect } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    console.log('authenticated')
  }

  function login(email, password) {
    console.log('authenticated')
  }
  

  function logout() {
    //  return auth.signOut()
  }

  function resetPassword(email) {
    //  return auth.sendPasswordResetEmail(email)
  }

  //   useEffect(() => {
  //     const unsubscribe = auth.onAuthStateChanged(user => {
  //       setCurrentUser(user)
  //       setLoading(false)
  //     })

  //     return unsubscribe
  //   }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
