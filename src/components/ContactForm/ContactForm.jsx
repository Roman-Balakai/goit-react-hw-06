import { Form, Formik, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
const initialValues = {
  id: "",
  name: "",
  number: "",
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.number().required("Required"),
});

function ContactForm({ onAdd }) {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={s.formContainer}>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId} />
          <ErrorMessage name="name" component="span" />
          <label htmlFor={numberId}>Number</label>
          <Field type="number" name="number" id={numberId} />
          <ErrorMessage name="number" component="span" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
}

export default ContactForm;
