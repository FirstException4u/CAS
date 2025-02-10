interface PersonalDetailsData {
    title: string;
    lastName: string;
    firstName: string;
    middleName: string;
    mobileNo: string;
    phoneNo?: string;
    identificationStatus?: string;
    bloodGroup?: string;
    gender: string;
    dob: string;
    occupation?: string;
    motherTongue?: string;
    birthPlace: string;
    nationality: string;
    admissionCategory?: string;
    casteCategory?: string;
    fatherName?: string;
    guardianContact?: string;
    familyIncome?: string;
    aadhaarNo: string;
  }
 interface FormInputProps {
    label: string;
    name: keyof PersonalDetailsData;
    type?: string;
    register: any;
    error?: string;
  }
  const FormInput: React.FC<FormInputProps> = ({
    label,
    name,
    type = "text",
    register,
    error,
  }) => (
    <div>
      <label className="font-medium">{label}</label>
      <input
        type={type}
        {...register(name)}
        className="w-full border p-2 rounded"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
  
  export default FormInput;