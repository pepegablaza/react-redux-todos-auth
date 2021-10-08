import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
	email: Yup.string()
		.email("Invalid email.")
		.required("The email is required."),
	password: Yup.string()
		.required("The passoword is required.")
		.min(8, "Too short."),
});
export default LoginSchema;
