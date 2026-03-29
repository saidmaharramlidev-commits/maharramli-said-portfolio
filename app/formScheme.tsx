import * as yup from "yup"

export const formScheme = yup.object().shape({
    name: yup.string()
        .min(2, "Name must be at least 2 characters")
        .max(30, "Name is too long")
        .matches(/^[A-Za-z]+$/, "Only letters are allowed")
        .required("Name is required"),

    surname: yup.string()
        .min(2, "Surname must be at least 2 characters")
        .max(30, "Surname is too long")
        .matches(/^[A-Za-z]+$/, "Only letters are allowed")
        .required("Surname is required"),

    email: yup.string()
        .email("Enter a valid email address")
        .required("Email is required"),

    message: yup.string()
        .min(5, "Message must be at least 5 characters")
        .max(500, "Message is too long")
        .required("Message is required"),

})