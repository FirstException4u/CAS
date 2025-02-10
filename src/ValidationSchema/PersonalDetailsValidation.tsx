import * as Yup from "yup";

export const PersonalDetailsValidation = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  lastName: Yup.string().required('Last Name is required'),
  firstName: Yup.string().required('First Name is required'),
  middleName: Yup.string().required('Middle Name is required'),
  mobileNo: Yup.string()
    .required('Mobile Number is required')
    .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits'),
  phoneNo: Yup.string().optional(),
  identificationStatus: Yup.string().optional(),
  bloodGroup: Yup.string().optional(),
  gender: Yup.string().required('Gender is required'),
  dob: Yup.date().required('Date of Birth is required'),
  occupation: Yup.string().optional(),
  motherTongue: Yup.string().optional(),
  birthPlace: Yup.string().required('Birth Place is required'),
  nationality: Yup.string().required('Nationality is required'),
  admissionCategory: Yup.string().optional(),
  casteCategory: Yup.string().optional(),
  fatherName: Yup.string().optional(),
  guardianContact: Yup.string().optional(),
  familyIncome: Yup.string().optional(),
  aadhaarNo: Yup.string()
    .required()
    .matches(/^[0-9]{12}$/, 'Aadhaar number must be 12 digits')
   
});
