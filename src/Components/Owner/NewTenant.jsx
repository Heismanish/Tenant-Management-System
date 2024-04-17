import React from "react";
import { IoPersonAdd } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const NewTenant = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4 border border-gray-700 text-black  flex flex-col gap-5 rounded-lg justify-center">
      <h1 className="text-xl text-center">Add Tenant</h1>
      <div className="flex justify-center">
        <IoPersonAdd
          className="text-[30px] cursor-pointer "
          onClick={() => navigate("/owner/newTenant")}
        />
      </div>
    </div>
  );
};

export default NewTenant;
