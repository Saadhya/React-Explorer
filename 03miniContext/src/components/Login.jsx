import React from "react";
import { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  //   method from context api
  const { setUserData } = useContext(UserContext);

  const handleSubmit = () => {
    console.log(user);
    setUserData(user)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
    // console.log(user);
  };
  return (
    <div className="mx-auto flex gap-x-2 items-center justify-center h-1/2 w-1/2">
      <h1 className=""> login form:</h1>
      <br />
      <br />
      <div class="w-full md:w-1/3">
        <label
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="name"
        >
          Name
        </label>
        <input
          class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          value={user.name}
          onChange={handleChange}
          placeholder="name"
          name="name"
          id="name"
        />
      </div>
      <div class="w-full md:w-1/3">
        <label
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="Password"
        >
          Password
        </label>
        <input
          class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          value={user.password}
          onChange={handleChange}
          placeholder="password"
          name="password"
          id="Password"
        />
      </div>
      {/* <input type="text" />
      <input type="text" /> */}
      <button
        type="button"
        class="rounded-md bg-black mt-6 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={handleSubmit}
      >
        login
      </button>
    </div>
  );
};

export default Login;
