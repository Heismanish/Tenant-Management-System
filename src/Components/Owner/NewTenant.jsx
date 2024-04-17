import React from "react";
import { IoPersonAdd } from "react-icons/io5";

const NewTenant = () => {
  return (
    <div className="p-4 border border-gray-700 text-black  flex flex-col gap-5 rounded-lg justify-center">
      <h1 className="text-xl text-center">Add Tenant</h1>
      <div className="flex justify-center">
        <IoPersonAdd className="text-[30px] cursor-pointer" />
      </div>
    </div>
  );
};

export default NewTenant;
