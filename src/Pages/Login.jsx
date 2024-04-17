import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      data: { user, session },
      error,
    } = await login(loginData.email, loginData.password);
    if (error) {
      throw Error(error);
    }
    if (user && session) {
      console.log(user);
      navigate("/owner");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="border rounded-lg border-gray-900 pt-5 text-black">
      <h1 className="text-xl font-semibold text-center mt-2">Login</h1>
      <form
        className="card-body items-center text-center text-black"
        onSubmit={handleSubmit}
      >
        <label className="input input-bordered flex items-center gap-2 bg-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            name="email"
            type="text"
            className="grow placeholder-black placeholder-opacity-50"
            placeholder="Email"
            value={loginData.email}
            onChange={handleChange}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 bg-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            name="password"
            type="password"
            className="grow placeholder-black placeholder-opacity-50"
            placeholder="Password"
            value={loginData.password}
            onChange={handleChange}
          />
        </label>
        <button className="btn" onClick={() => {}}>
          Login
        </button>
        <p>
          New User?{" "}
          <Link to={"/signup"}>
            <span className="text-blue-700">Signup</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
