import * as Yup from "yup";

export const AuthenticationSchema = Yup.object().shape({
   email: Yup.string().email("Invalid email address").required("Email is required"),
   password: Yup.string().min(8, "Password must be at least 8 characters long").required("Password is required")
})