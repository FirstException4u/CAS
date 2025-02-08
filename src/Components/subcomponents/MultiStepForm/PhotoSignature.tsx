import { useState } from 'react';

export const PhotoSignatureForm = () => {
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [signatureFile, setSignatureFile] = useState<File | null>(null);

  const handleFileChange = (
    setter: React.Dispatch<React.SetStateAction<File | null>>,
    maxSize: number
  ) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size <= maxSize * 1024) {
      setter(file);
    }
  };
  const HandleClick=()=>{
    const currentStepString = localStorage.getItem("currentStep");
    const currentStep = currentStepString ? parseInt(currentStepString, 10) : 0;
    localStorage.setItem("currentStep", (currentStep + 1).toString());
  }
  return (
    <div className="container h-[70vh]  mx-auto p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">
        Photo and Signature Details
      </h2>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Student Photo Section */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Student Photo*
            </label>
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6">
              <input
                type="file"
                id="photo-upload"
                className="hidden"
                accept="image/jpeg, image/png"
                onChange={handleFileChange(setPhotoFile, 500)}
              />
              <label
                htmlFor="photo-upload"
                className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Upload Photo
              </label>
              <p className="mt-2 text-xs text-gray-500">
                Format: JPG, PNG (Max size 500 KB)
              </p>
              {photoFile && (
                <p className="mt-2 text-sm text-gray-600">{photoFile.name}</p>
              )}
            </div>
          </div>

          {/* Student Signature Section */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Student Signature*
            </label>
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6">
              <input
                type="file"
                id="signature-upload"
                className="hidden"
                accept="image/jpeg, image/png"
                onChange={handleFileChange(setSignatureFile, 300)}
              />
              <label
                htmlFor="signature-upload"
                className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Upload Sign
              </label>
              <p className="mt-2 text-xs text-gray-500">
                Format: JPG, PNG (Max size 300 KB)
              </p>
              {signatureFile && (
                <p className="mt-2 text-sm text-gray-600">
                  {signatureFile.name}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Save & Next Button */}
        <div className="pt-6">
          <button
            type="button"
            onClick={HandleClick}
            className="w-full md:w-auto px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Save & Next
          </button>
        </div>
      </div>
    </div>
  );
};