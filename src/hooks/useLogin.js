import { useState } from "react";
import { supabase } from "../supabase/client";

export const useLogin = () => {
  const [loading, setLoading] = useState(false); // Set initial loading state to false

  const login = async ({
    fullname,
    email,
    password,
    confirmPassword,
    role,
  }) => {
    setLoading(true); // Set loading state to true when starting the sign-up process

    try {
      // Check if password and confirmPassword match
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }

      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      console.log(data, error);
      if (error) {
        throw error;
      }

      // If signup is successful, update user profile with additional information
      const { error: UpdateError } = await supabase
        .from("users")
        .update({
          name: fullname,
          role: role,
        })
        .eq("id", data.user.id);

      if (UpdateError) {
        throw UpdateError;
      }

      return { data };
    } catch (error) {
      console.error("Error signing up:", error);
      return { error };
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};
