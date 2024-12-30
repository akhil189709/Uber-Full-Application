import { React } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const CaptainSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [captainData, setcaptainData] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();

    setcaptainData({
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    });
    console.log(captainData);

    setEmail("");
    setPassword("");
    setfirstname("");
    setlastname("");
  };

  return (
    <div>
      <div className="px-5 py-5 h-screen flex flex-col justify-between">
        <div>
          <img
            className="w-20 mb-10"
            src="https://www.svgrepo.com/show/505031/uber-driver.svg"
            alt=""
          />
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className="text-lg  w-full font-medium mb-2">What's our captain's name</h3>
            <div className="flex gap-2 w-full">
              <input
                className="bg-[#eeeeee] px-4 py-2 w-1/2 rounded border text-lg placeholder:text-base"
                required
                type="text"
                placeholder="First name"
                value={firstname}
                onChange={(e) => {
                  setfirstname(e.target.value);
                }}
              />
              <input
                className="bg-[#eeeeee]  px-4 py-2 w-1/2 rounded border text-lg placeholder:text-base"
                required
                type="text"
                placeholder="Last name"
                value={lastname}
                onChange={(e) => {
                  setlastname(e.target.value);
                }}
              />
            </div>
            <h3 className="text-lg font-medium mt-3 mb-2 ">
              What's our captain's email
            </h3>
            <input
              className="bg-[#eeeeee] mb-5 px-4 py-2 rounded border w-full text-base placeholder:text-base"
              required
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <h3 className="text-lg font-medium mb-2">Enter your password</h3>
            <input
              className="bg-[#eeeeee] mb-5  px-4 py-2 rounded border w-full text-lg placeholder:text-base"
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className="bg-[#111] text-white font-semibold mb-3 px-4 py-2 rounded  w-full text-lg placeholder:text-base">
              Login
            </button>
          </form>
          <p className="text-center pt-3">
            Already have an account?
            <Link to="/captain-login" className="text-blue-600 pl-1">
              Login here
            </Link>
          </p>
        </div>
        <div>
          <p className="text-[10px] leading-4">
            This site is protected by the reCAPTCHA and{" "}
            <span className="underline">Google Privacy Policy </span> and
            <span className="underline">Terms of Service apply</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignUp;
