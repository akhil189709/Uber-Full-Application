import React, { useState } from "react";
import { Link } from "react-router-dom";
import { set } from "zod";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { CaptainDataContext } from "../context/captainContext";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const captain = {
      email: email,
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captain
    );

    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setPassword("");

    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
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
            Captain Login
          </button>
        </form>
        <p className="text-center pt-3">
          Join a fleet?
          <Link to="/captain-signup" className="text-blue-600 pl-1">
            Register as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-[#e68d45] flex items-center justify-center text-white font-semibold mb-3 px-4 py-2 rounded  w-full text-lg placeholder:text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
