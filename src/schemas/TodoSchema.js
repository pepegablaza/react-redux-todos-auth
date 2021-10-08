import * as Yup from "yup";

const TodoSchema = Yup.object().shape({
	todo: Yup.string().required("The todo is required.").min(4, "Too short"),
});

export default TodoSchema;
