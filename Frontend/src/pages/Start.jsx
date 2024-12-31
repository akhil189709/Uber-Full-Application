import React from 'react'
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div>
      <div className=" bg-cover bg-center bg-[url(https://images.pexels.com/photos/29928398/pexels-photo-29928398/free-photo-of-city-street-at-dawn-with-traffic-lights-and-vehicles.jpeg?auto=compress&cs=tinysrgb&w=1200)] h-screen pt-8  w-full flex justify-between flex-col">
        <img
          className="w-16 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <div className="bg-white py-4 px-4 pb-7">
          <h2 className="text-3xl font-bold ">Get started with Uber</h2>
          <Link to='/login'className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Start
