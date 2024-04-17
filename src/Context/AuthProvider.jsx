import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/client";

const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

const login = (email, password) =>
supabase.auth.signInWithPassword({ email, password });

const signOut = () => supabase.auth.signOut();


const AuthProvider = (props) => {
    const [user, setUser] = useState(null);
   /* eslint-disable-next-line  */
    const [auth, setAuth] = useState(false);
    const [userData,setUserData] = useState(null)
  
    useEffect(() => {
      const { data } = supabase.auth.onAuthStateChange((event, session) => {
        if (event === "SIGNED_IN") {
          setUser(session.user);
          setAuth(true);
        } else if (event === "SIGNED_OUT") {
          setUser(null);
          setAuth(false);
        }
      });
      return () => {
        data.subscription.unsubscribe();
      };
    }, []);

  return (
    /* eslint-disable-next-line react/prop-types */
    <AuthContext.Provider value={{ auth,user,login,signOut }}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;