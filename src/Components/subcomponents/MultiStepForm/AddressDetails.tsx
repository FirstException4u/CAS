import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

interface AddressFormData {
  country: string;
  state: string;
  district: string;
  city: string;
  isSameAsPermanent: boolean;
  localState: string;
  localDistrict: string;
  localCity: string;
}

type AddressErrors = Partial<Record<keyof AddressFormData, string>>;

const AddressDetails: React.FC = () => {
  const [formData, setFormData] = useState<AddressFormData>({
    country: "INDIA",
    state: "",
    district: "",
    city: "",
    isSameAsPermanent: false,
    localState: "",
    localDistrict: "",
    localCity: "",
  });

  const [errors, setErrors] = useState<AddressErrors>({});

  useEffect(() => {
    const savedData = localStorage.getItem("addressDetails");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("addressDetails", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const fieldName = name as keyof AddressFormData;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        isSameAsPermanent: checked,
        localState: checked ? prev.state : "",
        localDistrict: checked ? prev.district : "",
        localCity: checked ? prev.city : "",
      }));
    } else {
      setFormData({ ...formData, [fieldName]: value });
    }

    if (errors[fieldName]) {
      setErrors((prev) => ({ ...prev, [fieldName]: "" }));
    }
  };

  const validateForm = (): boolean => {
    let newErrors: AddressErrors = {};
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.district) newErrors.district = "District is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.isSameAsPermanent) {
      if (!formData.localState) newErrors.localState = "State is required";
      if (!formData.localDistrict) newErrors.localDistrict = "District is required";
      if (!formData.localCity) newErrors.localCity = "City is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      const currentStepString = localStorage.getItem("currentStep");
      const currentStep = currentStepString ? parseInt(currentStepString, 10) : 0;
      localStorage.setItem("currentStep", (currentStep + 1).toString());
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="mx-auto p-6 ">
      <h2 className="text-2xl font-semibold mb-6">Address Details</h2>
      <form onSubmit={handleSubmit}>
        {/* Permanent Address */}
        <div className="mb-8 ">
          <h3 className="font-semibold mb-4">Residence / Permanent Address</h3>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label className="font-medium">Country *</label>
              <input type="text" value="INDIA" disabled className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="font-medium">State *</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
            </div>
            <div>
              <label className="font-medium">District *</label>
              <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              {errors.district && <p className="text-red-500 text-sm">{errors.district}</p>}
            </div>
            <div>
              <label className="font-medium">City *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
            </div>
          </div>
        </div>
        {/* Correspondence Address */}
        <div className="mb-8 ">
          <h3 className="font-semibold mb-4">Correspondence/Local Address</h3>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="isSameAsPermanent"
              checked={formData.isSameAsPermanent}
              onChange={handleChange}
              className="mr-2"
            />
            Same as Permanent Address
          </label>
          <div className="grid grid-cols-4 gap-4 mt-4">
            <div>
              <label className="font-medium">Country *</label>
              <input type="text" value="INDIA" disabled className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="font-medium">State *</label>
              <input
                type="text"
                name="localState"
                value={formData.localState}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                disabled={formData.isSameAsPermanent}
              />
              {errors.localState && <p className="text-red-500 text-sm">{errors.localState}</p>}
            </div>
            <div>
              <label className="font-medium">District *</label>
              <input
                type="text"
                name="localDistrict"
                value={formData.localDistrict}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                disabled={formData.isSameAsPermanent}
              />
              {errors.localDistrict && <p className="text-red-500 text-sm">{errors.localDistrict}</p>}
            </div>
            <div>
              <label className="font-medium">City *</label>
              <input
                type="text"
                name="localCity"
                value={formData.localCity}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                disabled={formData.isSameAsPermanent}
              />
              {errors.localCity && <p className="text-red-500 text-sm">{errors.localCity}</p>}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Save & Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressDetails;
