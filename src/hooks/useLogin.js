import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const useLogin = () => {
  const [loading, setLoading] = useState(false); // Set initial loading state to false
  console.log(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
  );
  const login = async ({
    fullname,
    email,
    password,
    confirmPassword,
    role,
  }) => {
    setLoading(true); // Set loading state to true when starting the sign-up process
    console.log({ fullname, email, password, confirmPassword, role });

    try {
      // Check if password and confirmPassword match
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }

      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      console.log(data);
      if (error) {
        throw error;
      }

      // If signup is successful, update user profile with additional information
      const { user, error: profileError } = await supabase
        .from("users")
        .insert({
          user_id: data.user.id,
          fullname: fullname,
          email: email,
          password: password,
          role: role,
        });

      console.log(user, profileError);

      if (profileError) {
        throw profileError;
      }

      return { user }; // Return user data if everything is successful
    } catch (error) {
      console.error("Error signing up:", error);
      return { error }; // Return error if sign-up process fails
    } finally {
      setLoading(false); // Set loading state back to false after sign-up process completes
    }
  };

  return { loading, login }; // Return loading state and login function from the hook
};
