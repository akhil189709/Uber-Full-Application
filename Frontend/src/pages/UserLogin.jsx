import React, { useState } from "react";
import { use } from "react";
import { Link } from "react-router-dom";
import { set } from "zod";

const Userlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({
      email: email,
      password:password
    })
    console.log(userData);

    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 px-4 py-2 rounded border w-full text-lg placeholder:text-base"
            required
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter your Password</h3>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 px-4 py-2 rounded border w-full text-lg placeholder:text-base"
            required
            type="password"
            placeholder="Password"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 px-4 py-2 rounded  w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center pt-3">
          New Here?
          <Link to="/signup" className="text-blue-600 pl-1">
            Create new Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-3 px-4 py-2 rounded  w-full text-lg placeholder:text-base"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default Userlogin;
