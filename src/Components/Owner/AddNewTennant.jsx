import  { useState } from "react";

const AddNewTennant = () => {
  const [tenantInfo, setTenantInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [contractInfo, setContractInfo] = useState({
    startDate: "",
    endDate: "",
    rentAmount: "",
    roomNumber: "",
  });

  const [leaseInfo, setLeaseInfo] = useState({
    duration: "",
    terms: "",
  });

  const handleTenantInfoChange = (e) => {
    const { name, value } = e.target;
    setTenantInfo({ ...tenantInfo, [name]: value });
  };

  const handleContractInfoChange = (e) => {
    const { name, value } = e.target;
    setContractInfo({ ...contractInfo, [name]: value });
  };

  const handleLeaseInfoChange = (e) => {
    const { name, value } = e.target;
    setLeaseInfo({ ...leaseInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Submitted:", { tenantInfo, contractInfo, leaseInfo });
    setTenantInfo({ name: "", email: "", phone: "", roomNumber: "" });
    setContractInfo({ startDate: "", endDate: "", rentAmount: "" });
    setLeaseInfo({ duration: "", terms: "" });
  };

  return (
    <div className="p-4 border border-gray-600 rounded-lg px-8 text-black">
      <h1 className="text-xl text-center font-bold">Add New Tenant</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-4 gap-3 text-black"
      >
        <div className="flex gap-20">
          <div className="flex flex-col gap-3">
            <h2>Tenant Info</h2>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={tenantInfo.name}
                onChange={handleTenantInfoChange}
                placeholder="Name"
                className="input text-black input-bordered w-full max-w-xs bg-gray-300"
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={tenantInfo.email}
                onChange={handleTenantInfoChange}
                placeholder="Email"
                className="input input-bordered w-full max-w-xs bg-gray-300"
              />
            </label>
            <label>
              Phone:
              <input
                type="text"
                name="phone"
                value={tenantInfo.phone}
                onChange={handleTenantInfoChange}
                placeholder="Phone"
                className="input input-bordered w-full max-w-xs bg-gray-300"
              />
            </label>
          </div>
          <div className="flex flex-col gap-3">
            <h2>Contract Info</h2>
            <div className="flex gap-10">
              <label className="flex flex-col ">
                Start Date:
                <input
                  type="date"
                  name="startDate"
                  value={contractInfo.startDate}
                  onChange={handleContractInfoChange}
                  placeholder="Start Date"
                  className="input input-bordered max-w-xs text-xs bg-gray-300"
                />
              </label>
              <label className="flex flex-col ">
                End Date:
                <input
                  type="date"
                  name="endDate"
                  value={contractInfo.endDate}
                  onChange={handleContractInfoChange}
                  placeholder="End Date"
                  className="input input-bordered max-w-xs text-xs bg-gray-300"
                />
              </label>
            </div>
            <label>
              Room Number:
              <input
                type="text"
                name="roomNumber"
                value={contractInfo.roomNumber}
                onChange={handleContractInfoChange}
                placeholder="Room Number"
                className="input input-bordered w-full max-w-xs bg-gray-300"
              />
            </label>

            <label>
              Rent Amount:
              <input
                type="text"
                name="rentAmount"
                value={contractInfo.rentAmount}
                onChange={handleContractInfoChange}
                placeholder="Rent Amount"
                className="input input-bordered w-full max-w-xs bg-gray-300"
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2>Lease Info</h2>
          <div className="flex gap-20 ">
            <label className="flex flex-col">
              Duration:
              <input
                type="text"
                name="duration"
                value={leaseInfo.duration}
                onChange={handleLeaseInfoChange}
                placeholder="Duration"
                className="input input-bordered  w-[260px] bg-gray-300"
              />
            </label>
            <label className="flex flex-col">
              Terms:
              <textarea
                name="terms"
                value={leaseInfo.terms}
                onChange={handleLeaseInfoChange}
                placeholder="Terms"
                className="input input-bordered w-[310px]  bg-gray-300"
              />
            </label>
          </div>
        </div>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewTennant;
