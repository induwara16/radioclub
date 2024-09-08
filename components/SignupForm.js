import { Formik, Field, Form, ErrorMessage } from 'formik';
import { object, string, number } from 'yup';

export const schema = object({
  name: string().trim().required().label('Name'),
  class: string().uppercase().trim().required().label('Class'),
  whatsapp: string().matches(/^\d+$/g, 'Must only contain digits from 0-9').min(10).required().label('WhatsApp no.')
});

export default function SignupForm() {
  function ErrorContainer({ children }) {
    return <span className='form-error'>{children}</span>;
  }

  return (
    <Formik
      validationSchema={schema}
      initialStatus={{
        show: 'hide',
        error: false
      }}
      initialValues={{
        name: '',
        class: '',
        whatsapp: ''
      }}
      onSubmit={async function (values, { resetForm, setStatus }) {
        const resp = await fetch('/api/signup', {
          method: 'POST',
          body: JSON.stringify({ ...values, class: values.class.toUpperCase() })
        });

        let error = false;

        if (resp.status !== 200) {
          setStatus({ error: true, show: 'show' });
          error = true;
        }
        else {
          resetForm();
          setStatus({ error: false, show: 'show' });
        }

        setTimeout(function () { setStatus({ error, show: 'none' }) }, 5000);
      }}>
      {function ({ isSubmitting, setStatus, status }) {
        return (
          <Form>
            <div>
              <label>Your Name:</label>
              <Field name='name' type="text" />
              <ErrorMessage name='name' component={ErrorContainer} />
            </div>
            <div>
              <label>Your Class:</label>
              <Field name='class' type="text" />
              <ErrorMessage name='class' component={ErrorContainer} />
            </div>
            <div>
              <label>WhatsApp Number:</label>
              <Field name='whatsapp' type="text" />
              <ErrorMessage name='whatsapp' component={ErrorContainer} />
            </div>

            <div className='flex flex-row gap-x-6 mt-3 sm:mt-4'>
              <button type="submit" className="btn btn-fill" disabled={isSubmitting}>JOIN RCRC</button>
              {isSubmitting &&
                <div className='size-6 my-auto rounded-full bg-gray-500 animate-spin bg-opacity-70'>
                  <div className='size-1.5 my-auto rounded-full bg-gray-200 relative top-1.5 left-1.5' />
                </div>
              }
            </div>

            <div
              className={`border-2 py-2 px-3 mt-8 !-mb-2 animate__animated ${status.show === 'hide' ? 'hidden' : ''} ${status.show !== 'none' ? 'animate__fadeIn flex' : 'animate__fadeOut'} ${status.error ? 'border-amber-500' : 'border-green-500'}`}
              onAnimationEnd={function (e) {
                if (status.show === 'none')
                  setStatus({ ...status, show: 'hide' });
              }}>
              {status.error ?
                'Could not submit the form due to a server error! Please try again' :
                'Thank you for submitting the form, you will be added to our WhatsApp group shortly'
              }
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}