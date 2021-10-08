import * as Yup from "yup";

const RecoverSchema = Yup.object().shape({
	email: Yup.string()
		.email("Invalid email.")
		.required("The email is required."),
});

export default RecoverSchema;
