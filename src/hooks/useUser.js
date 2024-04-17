import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import useStore from "../store/useStore";
import { useAuth } from "../Context/AuthProvider";
import { data } from "autoprefixer";

const useUser = () => {
  const [loading, setLoading] = useState(false);
  const { userData, setUserData } = useStore();
  const { user } = useAuth();

  useEffect(() => {
    const getUser = async (id) => {
      setLoading(true); // Set loading state to true when fetching user data
      try {
        const { data: userD, error } = await supabase
          .from("users")
          .select("*")
          .eq("id", id)
          .single(); // Assuming a single user should be fetched based on ID

        if (error) {
          console.error(error);
          throw Error(error.message); // Throw an error if fetching data fails
        } else {
          console.log(userD);
          setUserData(userD); // Update userData in the global store
          setTimeout(() => {
            console.log(userData);
          }, 3000);
        }
      } catch (error) {
        // Handle errors more gracefully, e.g., set an error state
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false); // Set loading state back to false after fetching data
      }
    };

    if (user) {
      getUser(user.id); // Call getUser when user is available
    }
  }, [user, setUserData]); // Include user and setUserData in the dependency array

  return { loading, userData }; // Return userData from the hook
};

export default useUser;
