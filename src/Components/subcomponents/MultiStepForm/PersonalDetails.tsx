
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormStore } from "../../../GlobalStore/FormStore";
import { PersonalDetailsData } from "../../../Interfaces/PersonalDetailsInterfaces";
import FormInput from "../Field/FormInput";
import FieldGroup from "../Field/FieldGroup";
import {FieldOptionInterfaces} from "../../../Interfaces/FieldOption";
import { PersonalDetailsValidation } from "../../../ValidationSchema/PersonalDetailsValidation";
import { usePersonalDetailsStore } from "../../../GlobalStore/PersonalDetailsStore";


const PersonalDetails: React.FC = () => {
 
  const { ActiveFormStep, setActiveFormStep } = useFormStore();
  const {Data , setData} = usePersonalDetailsStore()
  const { register, handleSubmit, formState: { errors } } = useForm<PersonalDetailsData>({
    resolver: yupResolver(PersonalDetailsValidation) as any,
    defaultValues: {
      title: Data.title,
      lastName: Data.lastName,
      firstName: Data.firstName,
      middleName: Data.middleName,
      mobileNo: Data.mobileNo,
      phoneNo: Data.phoneNo,
      identificationStatus: Data.identificationStatus,
      bloodGroup: Data.bloodGroup,
      gender: Data.gender,
      dob: Data.dob,
      occupation: Data.occupation,
      motherTongue: Data.motherTongue,
      birthPlace: Data.birthPlace,
      nationality: Data.nationality,
      admissionCategory: Data.admissionCategory,
      casteCategory: Data.casteCategory,
      fatherName: Data.fatherName,
      guardianContact: Data.guardianContact,
      familyIncome: Data.familyIncome,
      aadhaarNo: Data.aadhaarNo,
    },
  });
  
  const onSubmit = (data: PersonalDetailsData) => {
    console.log(data);
    setData(data);
    alert("Form submitted successfully!");
    setActiveFormStep(ActiveFormStep + 1);
  };

  const onError = (errors: any) => {
    console.error("Form validation errors:", errors);
  };

  
  const personalInfoFields: FieldOptionInterfaces[] = [
    { label: "Title *", name: "title" },
    { label: "Last Name *", name: "lastName" },
    { label: "First Name *", name: "firstName" },
    { label: "Middle Name *", name: "middleName" },
  ];

  const contactInfoFields: FieldOptionInterfaces[] = [
    { label: "Mobile No. *", name: "mobileNo" },
    { label: "Phone No.", name: "phoneNo" },
    { label: "Identification Status", name: "identificationStatus" },
    { label: "Blood Group", name: "bloodGroup" },
  ];

  const detailsFields: FieldOptionInterfaces[] = [
    { label: "Gender *", name: "gender" },
    { label: "Date of Birth *", name: "dob", type: "date" },
    { label: "Occupation", name: "occupation" },
    { label: "Mother Tongue", name: "motherTongue" },
  ];

  const additionalInfoFields: FieldOptionInterfaces[] = [
    { label: "Birth Place *", name: "birthPlace" },
    { label: "Nationality *", name: "nationality" },
    { label: "Admission Category", name: "admissionCategory" },
    { label: "Caste Category", name: "casteCategory" },
  ];

  const parentInfoFields: FieldOptionInterfaces[] = [
    { label: "Father's Name", name: "fatherName" },
    { label: "Guardian Contact No.", name: "guardianContact" },
    { label: "Family Income", name: "familyIncome" },
  ];
  
  return (

    <div className="p-6 font-sans text-gray-600">
      <h2 className="text-[5vw] mb-4 font-[Kajiro]">Personal Details</h2>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {/* Personal Details Section */}
        <FieldGroup fields={personalInfoFields} register={register} errors={errors} />

        {/* Contact Information */}
        <FieldGroup fields={contactInfoFields} register={register} errors={errors} />

        {/* Additional Details */}
        <FieldGroup fields={detailsFields} register={register} errors={errors} />

        {/* More Information */}
        <FieldGroup fields={additionalInfoFields} register={register} errors={errors} />

        {/* Parent Information */}
        <h3 className="font-semibold mb-2">Parent Information</h3>
        <FieldGroup
          fields={parentInfoFields}
          register={register}
          errors={{}}
          gridClasses="grid grid-cols-2 gap-4 border-b pb-4 mb-4"
        />

        {/* Other Information */}
        <h3 className="font-semibold mb-2">Other Information</h3>
        <div>
          <FormInput
            label="Aadhaar No."
            name="aadhaarNo"
            register={register}
            error={errors.aadhaarNo?.message}
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
