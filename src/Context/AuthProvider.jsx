import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/client";

const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

const login = (email, password) =>
  supabase.auth.signInWithPassword({ email, password });

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setUser(session.user);
        setAuth(true);
        fetchUserData(session.user.id);
      } else {
        setUser(null);
        setAuth(false);
      }
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  const fetchUserData = async (userId) => {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", userId)
      .single();

    if (error) {
      console.error("Error fetching user data:", error);
      return;
    }

    setUserData(data);
  };
  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Error logging out:", error);
      } else {
        setUser(null);
        setUserData(null);
        setAuth(false); // Reset auth state after successful logout
      }
    } catch (error) {
      console.error("Unexpected error during logout:", error);
    }
  };
  return (
    <AuthContext.Provider value={{ auth, login, userData, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
