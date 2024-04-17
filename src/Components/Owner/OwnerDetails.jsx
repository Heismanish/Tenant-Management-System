import React from "react";
import { FaArrowRight } from "react-icons/fa";

const OwnerDetails = ({ propertyInfo }) => {
  const { ownerName, totalRooms, availableRooms, otherInfo } = propertyInfo;

  return (
    <div className="p-4 border border-gray-700 text-black  flex flex-col gap-2 rounded-lg justify-center">
      <h1 className="text-xl font-bold">Welcome, {ownerName}!</h1>
      <p>Total Rooms: {totalRooms}</p>
      <p className="flex gap-5 items-center">
        Available Rooms: {availableRooms}{" "}
        <span>
          <FaArrowRight />
        </span>
      </p>
      <p>Other Information: {otherInfo}</p>
      <div className="flex justify-center">
        <button className="btn btn-sm px-3">edit</button>
      </div>
    </div>
  );
};

export default OwnerDetails;
