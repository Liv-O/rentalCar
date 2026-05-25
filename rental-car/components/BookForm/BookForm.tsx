import Button from '../common/Button/Button';
import css from './BookForm.module.css';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

interface BookFormValues {
  username: string;
  email: string;
  comment?: string;
}

const initialValues: BookFormValues = {
  username: '',
  email: '',
  comment: '',
};

const BookFormSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(30, 'Name is too long')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  comment: Yup.string()
    .min(5, 'Comment too short')
    .max(300, 'Comment too long'),
});

export default function BookForm() {
  const handleSubmit = async (
    values: BookFormValues,
    actions: FormikHelpers<BookFormValues>,
  ) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));

      console.log('Booking data:', values);

      toast.success('Your booking has been successfully sent!');

      actions.resetForm();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div className={css.bookFormContainer}>
      <h2 className={css.formBookTitle}>Book your car now</h2>
      <p className={css.formBookDescription}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={BookFormSchema}>
        <Form className={css.bookForm}>
          <Field
            type="text"
            name="username"
            placeholder="Name*"
            className={css.inputBookForm}
          />
          <ErrorMessage
            name="username"
            component="span"
            className={css.error}
          />
          <Field
            type="email"
            name="email"
            placeholder="Email*"
            className={css.inputBookForm}
          />
          <ErrorMessage
            name="email"
            component="span"
            className={css.error}
          />
          <Field
            as="textarea"
            name="comment"
            placeholder="Comment"
            className={css.textareaBookForm}
            rows={2}
          />
          <ErrorMessage
            name="comment"
            component="span"
            className={css.error}
          />
          <Button
            type="submit"
            isDisabled={false}>
            Send
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
