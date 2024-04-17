import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
// import { useNavigate } from "react-router-dom";

const Signup = () => {
  // const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const { loading, signup } = useSignup();

  const submitHandler = async (e) => {
    e.preventDefault();
    const { fullname, email, password, confirmPassword, role } = signupData;

    const { user } = await signup({
      fullname,
      email,
      password,
      confirmPassword,
      role,
    });
    console.log(user);
    navigate("/owner");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="border rounded-lg border-gray-900 pt-5 text-black">
      <h1 className="text-xl font-semibold text-center mt-2">Signup</h1>
      <form
        className="card-body items-center text-center text-black"
        onSubmit={submitHandler}
      >
        <label className="input input-bordered  flex items-center gap-2 bg-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70  "
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            name="fullname"
            value={signupData.fullname}
            onChange={handleInputChange}
            className="grow placeholder-black placeholder-opacity-50"
            placeholder="Fullname"
          />
        </label>

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
            type="text"
            name="email"
            value={signupData.email}
            onChange={handleInputChange}
            className="grow placeholder-black placeholder-opacity-50"
            placeholder="Email"
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
            type="password"
            name="password"
            value={signupData.password}
            onChange={handleInputChange}
            className="grow placeholder-black placeholder-opacity-50"
            placeholder="Password"
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
            type="password"
            name="confirmPassword"
            value={signupData.confirmPassword}
            onChange={handleInputChange}
            className="grow placeholder-black placeholder-opacity-50"
            placeholder="Confirm Password"
          />
        </label>

        <div className="flex gap-2">
          <label className="label cursor-pointer">
            <span className="label-text">Owner</span>
            <input
              type="checkbox"
              name="role"
              value="owner"
              checked={signupData.role === "owner"}
              onChange={handleInputChange}
              className="checkbox"
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Tenant</span>
            <input
              type="checkbox"
              name="role"
              value="tenant"
              checked={signupData.role === "tenant"}
              onChange={handleInputChange}
              className="checkbox"
            />
          </label>
        </div>

        <button className="btn" disabled={loading} type="submit">
          Signup
        </button>
        <p>
          Already have an{" "}
          <Link to={"/"}>
            <span className="text-blue-700">account?</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
