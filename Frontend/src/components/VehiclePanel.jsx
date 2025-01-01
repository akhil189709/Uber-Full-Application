import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5>
        <i
          onClick={() => {
            props.setConfirmRidePanel(false);
          }}
          className="ri-arrow-down-wide-fill text-3xl  font-semibold rounded-lg  text-gray-300 mb-2 p-1 ml-40 text-center absolute -top-1"
        ></i>
      </h5>
      <h3 className="text-2xl font-bold mb-5">Choose a vehicle</h3>

      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex w-full p-3 mb-2  border-2 rounded-xl active:border-black bg-gray-100 items-center justify-between"
      >
        <img
          className="h-11 ml-2 bg-gray-100"
          src="https://static.vecteezy.com/system/resources/previews/048/600/933/non_2x/modern-car-isolated-on-background-3d-rendering-illustration-png.png"
          alt=""
        />
        <div className=" ml-5 w-1/2">
          <h4 className="font-medium text-base">
            UberGo
            <span className="pl-1">
              <i className="ri-user-3-fill"></i>
            </span>
            4
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-gray-600 text-xs">
            Affordable,compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹193.20</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex w-full p-3 mb-2  border-2 rounded-xl active:border-black items-center bg-gray-100 justify-between"
      >
        <img
          className="h-10 pl-2 "
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            Moto
            <span className="pl-1">
              <i className="ri-user-3-fill"></i>
            </span>
            1
          </h4>
          <h5 className="font-medium text-sm">4 mins away</h5>
          <p className="font-normal text-gray-600 text-xs">
            Affordable motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹66.40</h2>
      </div>

      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex w-full p-3 mb-2  border-2 rounded-xl active:border-black bg-gray-100 items-center justify-between"
      >
        <img
          className="h-8 pl-2 "
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className=" mr-3 w-1/2">
          <h4 className="font-medium text-base">
            Auto
            <span className="pl-1">
              <i className="ri-user-3-fill"></i>
            </span>
            3
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-gray-600 text-xs">
            Affordable auto rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹90</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
