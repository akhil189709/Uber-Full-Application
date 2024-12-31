import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding:25,
      });
      gsap.to(panelCloseRef.current, {
        opacity:1
      })
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        padding:0
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  return (
    <div className="h-screen relative">
      {/* Logo */}
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber Logo"
      />

      {/* Background Image */}
      <img
        className=" h-full w-full object-cover"
        src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        alt="Background"
      />

      {/* Content */}
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-6 bg-white relative">
          <h5 ref={panelCloseRef} onClick={() => {
            setPanelOpen(false)
          }}>
            <i className="ri-arrow-down-wide-line absolute top-6 right-6 text-2xl"></i>
          </h5>
          <h4 className="text-2xl font-semibold bg-white pl-2 mb-2 pt-4">
            Find a Trip
          </h4>

          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-14 w-1 top-[52%] left-10 rounded-full bg-gray-700 "></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-gray-100 text-lg rounded-lg w-full px-9 py-2 mb-3"
              type="text"
              placeholder="Add a pickup point"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="bg-gray-100 text-lg rounded-lg w-full px-9 py-2 mb-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>

        {/* sliding panel */}
        <div ref={panelRef} className="bg-white h-0">
          <LocationSearchPanel/>
        </div>
      </div>
    </div>
  );
};

export default Home;
