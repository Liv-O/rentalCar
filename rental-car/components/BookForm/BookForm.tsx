import Button from '../common/Button/Button';
import css from './BookForm.module.css';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { createBookingRequest } from '@/lib/api';

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

interface BookFormProps {
  carId: string;
}

export default function BookForm({ carId }: BookFormProps) {
  const mutation = useMutation({
    mutationFn: (values: BookFormValues) =>
      createBookingRequest(carId, {
        name: values.username,
        email: values.email,
        comment: values.comment || undefined,
      }),
  });
  const handleSubmit = async (
    values: BookFormValues,
    actions: FormikHelpers<BookFormValues>,
  ) => {
    try {
      const data = await mutation.mutateAsync(values);

      toast.success(data.message || 'Booking request sent successfully!');

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
