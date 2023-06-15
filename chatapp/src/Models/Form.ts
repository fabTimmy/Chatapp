import * as yup from "yup";

export const authFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required"),
  lastName: yup
    .string()
    .required("Last name is required"),
  email: yup
    .string()
    .email("Please provide a valid email address")
    .required("Email address is required"),
  password: yup
    .string()
    .min(6, "Password should be a minimum length of 6")
    .max(12, "Password should have a maximum length of 12")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password don't match")
    .required("Confirm password is required"),
});


export interface AuthForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string
}