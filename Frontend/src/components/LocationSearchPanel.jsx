import React from "react";

const LocationSearchPanel = (props) => {
  const locations = [
    "E-19,Greater kailash-1,New delhi",
    "E-12,Greater kailash-4,New delhi",
    "E-55,Greater kailash-2,New delhi",
    "E-166,Greater kailash-3,New delhi",
  ];
  return (
    <div>
      {/* this is just for the sample data */}
      {locations.map((elem,idx) => {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false)
            }}
            className="flex  gap-3 border-2 border-gray-102 active:border-black p-3 rounded-xl items-center justify-start mb-2"
          >
            <h2 className="bg-[#eee] h-7 w-7 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill text-base"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
