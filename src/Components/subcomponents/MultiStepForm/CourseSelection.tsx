import React, { useState } from "react";

export default function CourseSelection(): JSX.Element {
  const [selectedCourse, setSelectedCourse] = useState<string>("FYBSCT");

  const handleCourseChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedCourse(event.target.value);
  };

  const handleSave = (): void => {
    localStorage.setItem("selectedCourse", selectedCourse);
    const currentStepString = localStorage.getItem("currentStep");
    const currentStep = currentStepString ? parseInt(currentStepString, 10) : 0;
    localStorage.setItem("currentStep", (currentStep + 1).toString());
    alert("Course saved successfully!");
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="bg-gray-50  rounded-lg shadow-md p-8 max-w-md w-full">
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold text-gray-900">Course Selection</h1>
          
          <p className="text-sm text-gray-500">
            Please let the page load completely, before proceeding with course selection.
          </p>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Course</label>
            <select 
              value={selectedCourse} 
              onChange={handleCourseChange} 
              className="bg-gray-100 px-3 py-2 rounded font-mono text-gray-900 w-full"
            >
              <option value="FYBSCT">FYBSCT</option>
              <option value="SYBSCT">SYBSCT</option>
              <option value="TYBSCT">TYBSCT</option>
              <option value="MSC">MSC</option>
            </select>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <button 
              onClick={handleSave} 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Save & Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
