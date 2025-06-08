import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { login } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <Field className={css.input} type="email" name="email" placeholder="Email" required />
        <Field className={css.input} type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}