import React from 'react'

const ConfirmedRide = (props) => {
  return (
    <div>
      <h5>
        <i
          onClick={() => {
            props.setVehiclePanel(false);
          }}
          className="ri-arrow-down-wide-fill text-3xl  font-semibold rounded-lg  text-gray-300 mb-2 p-1 ml-40 text-center absolute -top-1"
        ></i>
      </h5>
      <h3 className="text-2xl font-bold mb-5">Confirm your Ride</h3>

      <div className="flex justify-between flex-col items-center">
        <img
          className="h-24"
          src="https://static.vecteezy.com/system/resources/previews/048/600/933/non_2x/modern-car-isolated-on-background-3d-rendering-illustration-png.png"
          alt=""
        />

        <div className="w-full">
          <div className='flex items-center gap-5'>
            <i className=" text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3>652/11-A</h3>
              <p>Greater kailash-1,New Delhi</p>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
        <button className="w-full bg-green-600 p-2 text-white  rounded-lg font-semibold">
          Confirm
        </button>
      </div>
    </div>
  );
}

export default ConfirmedRide
