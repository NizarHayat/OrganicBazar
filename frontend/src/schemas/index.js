import * as yup from "yup"

const passwordRules=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 charachters, 1 upper case letters,1 lower case letter,1 numberic digit.
export const basicSchema=yup.object().shape({
    email: yup.string().email("Please Enter a valid Email").required("Please Enter a valid email address"),
    // address: yup.string().address("Enter Address").required("Required"),

    // age: yup.number().positive().integer().required("Required"),
    password:yup
    .string()
    .min(5)
    .matches(passwordRules,{message:"Password should contain Min of 5 characheter,1 upper Case,1 lower Case and 1 numberic digit"})
    .required("Required"),

    
})

