import React, { useState, useEffect } from "react";

interface PersonalDetailsData {
  title: string;
  lastName: string;
  firstName: string;
  middleName: string;
  mobileNo: string;
  phoneNo: string;
  identificationStatus: string;
  bloodGroup: string;
  gender: string;
  dob: string;
  occupation: string;
  motherTongue: string;
  birthPlace: string;
  nationality: string;
  admissionCategory: string;
  casteCategory: string;
  fatherName: string;
  guardianContact: string;
  familyIncome: string;
  aadhaarNo: string;
}

type FormErrors = Partial<Record<keyof PersonalDetailsData, string>>;

const PersonalDetails: React.FC = () => {
  const [formData, setFormData] = useState<PersonalDetailsData>({
    title: "",
    lastName: "",
    firstName: "",
    middleName: "",
    mobileNo: "",
    phoneNo: "",
    identificationStatus: "",
    bloodGroup: "",
    gender: "",
    dob: "",
    occupation: "",
    motherTongue: "",
    birthPlace: "",
    nationality: "",
    admissionCategory: "",
    casteCategory: "",
    fatherName: "",
    guardianContact: "",
    familyIncome: "",
    aadhaarNo: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    const savedData = localStorage.getItem("personalDetails");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("personalDetails", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (errors[name as keyof PersonalDetailsData]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    let newErrors: FormErrors = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.middleName) newErrors.middleName = "Middle name is required";
    if (!formData.mobileNo) newErrors.mobileNo = "Mobile number is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.birthPlace) newErrors.birthPlace = "Birth place is required";
    if (!formData.nationality) newErrors.nationality = "Nationality is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      alert("Form submitted successfully!");
      const currentStepString = localStorage.getItem("currentStep");
      const currentStep = currentStepString ? parseInt(currentStepString, 10) : 0;
      localStorage.setItem("currentStep", (currentStep + 1).toString());
    }
  };

  return (
    <div className="p-6 font-sans">
      <h2 className="text-xl font-bold mb-4">Personal Details</h2>

      <form onSubmit={handleSubmit}>
        {/* Personal Details Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b pb-4 mb-4">
          {[
            { label: "Title *", name: "title" as keyof PersonalDetailsData },
            { label: "Last Name *", name: "lastName" as keyof PersonalDetailsData },
            { label: "First Name *", name: "firstName" as keyof PersonalDetailsData },
            { label: "Middle Name *", name: "middleName" as keyof PersonalDetailsData },
          ].map((field) => (
            <div key={field.name}>
              <label className="font-medium">{field.label}</label>
              <input
                type="text"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              {errors[field.name] && (
                <p className="text-red-500 text-sm">{errors[field.name]}</p>
              )}
            </div>
          ))}
        </div>

        {/* More Fields */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b pb-4 mb-4">
          {[
            { label: "Mobile No. *", name: "mobileNo" as keyof PersonalDetailsData },
            { label: "Phone No.", name: "phoneNo" as keyof PersonalDetailsData },
            { label: "Identification Status", name: "identificationStatus" as keyof PersonalDetailsData },
            { label: "Blood Group", name: "bloodGroup" as keyof PersonalDetailsData },
          ].map((field) => (
            <div key={field.name}>
              <label className="font-medium">{field.label}</label>
              <input
                type="text"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              {errors[field.name] && (
                <p className="text-red-500 text-sm">{errors[field.name]}</p>
              )}
            </div>
          ))}
        </div>

        {/* Gender, DOB, Occupation, Mother Tongue */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b pb-4 mb-4">
          {[
            { label: "Gender *", name: "gender" as keyof PersonalDetailsData },
            { label: "Date of Birth *", name: "dob" as keyof PersonalDetailsData, type: "date" },
            { label: "Occupation", name: "occupation" as keyof PersonalDetailsData },
            { label: "Mother Tongue", name: "motherTongue" as keyof PersonalDetailsData },
          ].map((field) => (
            <div key={field.name}>
              <label className="font-medium">{field.label}</label>
              <input
                type={field.type || "text"}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              {errors[field.name] && (
                <p className="text-red-500 text-sm">{errors[field.name]}</p>
              )}
            </div>
          ))}
        </div>

        {/* Birth Place, Nationality, Admission Category, Caste */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b pb-4 mb-4">
          {[
            { label: "Birth Place *", name: "birthPlace" as keyof PersonalDetailsData },
            { label: "Nationality *", name: "nationality" as keyof PersonalDetailsData },
            { label: "Admission Category", name: "admissionCategory" as keyof PersonalDetailsData },
            { label: "Caste Category", name: "casteCategory" as keyof PersonalDetailsData },
          ].map((field) => (
            <div key={field.name}>
              <label className="font-medium">{field.label}</label>
              <input
                type="text"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              {errors[field.name] && (
                <p className="text-red-500 text-sm">{errors[field.name]}</p>
              )}
            </div>
          ))}
        </div>

        {/* Parent Information */}
        <h3 className="font-semibold mb-2">Parent Information</h3>
        <div className="grid grid-cols-2 gap-4 border-b pb-4 mb-4">
          {[
            { label: "Father's Name", name: "fatherName" as keyof PersonalDetailsData },
            { label: "Guardian Contact No.", name: "guardianContact" as keyof PersonalDetailsData },
            { label: "Family Income", name: "familyIncome" as keyof PersonalDetailsData },
          ].map((field) => (
            <div key={field.name}>
              <label className="font-medium">{field.label}</label>
              <input
                type="text"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
          ))}
        </div>

        {/* Other Information */}
        <h3 className="font-semibold mb-2">Other Information</h3>
        <div>
          <label className="font-medium">Aadhaar No.</label>
          <input
            type="text"
            name="aadhaarNo"
            value={formData.aadhaarNo}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default PersonalDetails;
