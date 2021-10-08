import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
	firstName: Yup.string()
		.required("Your first name is required.")
		.min(3, "Too short.")
		.max(25, "Too long."),
	lastName: Yup.string()
		.required("Your last name is required.")
		.min(3, "Too short.")
		.max(25, "Too long."),
	email: Yup.string()
		.email("Invalid email.")
		.required("The email is required."),
	password: Yup.string()
		.required("The passoword is required.")
		.min(8, "The password is too short."),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password"), null], `Password doesn't match`)
		.required("You need to confirm your password."),
});

export default SignUpSchema;
