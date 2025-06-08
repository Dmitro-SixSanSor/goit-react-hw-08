import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <Field className={css.input} type="text" name="name" placeholder="Name" required />
        <Field className={css.input} type="email" name="email" placeholder="Email" required />
        <Field className={css.input} type="password" name="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}