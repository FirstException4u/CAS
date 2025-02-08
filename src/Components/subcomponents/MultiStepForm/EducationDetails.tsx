import React from 'react';

const EducationDetails = () => {
  const HandleClick=()=>{
    const currentStepString = localStorage.getItem("currentStep");
    const currentStep = currentStepString ? parseInt(currentStepString, 10) : 0;
    localStorage.setItem("currentStep", (currentStep + 1).toString());
  }
  return (
    <div className="mx-auto p-6 ">
      <h2 className="text-xl mb-6 font-bold">Education Details</h2>

      <div className="grid grid-cols-2 gap-x-8 gap-y-4 ">
        {/* Exam Level */}
        <div className="space-y-1">
          <label className="block font-medium">
            Exam Level <span className="text-red-500">*</span>
          </label>
          <select 
            className="w-full p-2 border rounded-md"
            value="HSC"
          >
            <option>HSC</option>
          </select>
        </div>

        {/* Exam Name */}
        <div className="space-y-1">
          <label className="block font-medium">
            Exam Name <span className="text-red-500">*</span>
          </label>
          <select 
            className="w-full p-2 border rounded-md"
            value="HSC"
          >
            <option>HSC</option>
          </select>
        </div>

        {/* Board/University */}
        <div className="col-span-2 space-y-1">
          <label className="block font-medium">
            Board/University <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            value="Maharashtra State board of secondary and high"
            readOnly
          />
        </div>

        {/* Year of Passing */}
        <div className="space-y-1">
          <label className="block font-medium">
            Year of Passing <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            className="w-full p-2 border rounded-md"
            value="2022"
          />
        </div>

        {/* Obtained Marks */}
        <div className="space-y-1">
          <label className="block font-medium">
            Obtained Marks <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-2 top-2">$</span>
            <input
              type="number"
              className="w-full pl-6 p-2 border rounded-md"
              value="50"
            />
          </div>
        </div>

        {/* Total Marks */}
        <div className="space-y-1">
          <label className="block font-medium">
            Total Marks <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            className="w-full p-2 border rounded-md"
            value="800"
          />
        </div>

        {/* Percentage */}
        <div className="space-y-1">
          <label className="block font-medium">Percentage<span className="text-red-500">*</span></label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            value="62.50"
            readOnly
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-8">
        <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
          Add
        </button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700" onClick={HandleClick}>
          Save & Next
        </button>
      </div>
    </div>
  );
};

export default EducationDetails;