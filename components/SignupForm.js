import { Formik, Field, Form } from 'formik';
import { useState } from 'react';

export default function SignupForm() {
  const [message, setMessage] = useState({ error: false, text: '' });

  return (
    <Formik
      initialValues={{
        name: '',
        class: '',
        whatsapp: ''
      }}
      onSubmit={async function (values, { resetForm }) {
        const resp = await fetch('/api/signup', {
          method: 'POST',
          body: JSON.stringify(values)
        });

        if (resp.status !== 200) {
          setMessage({ error: true, text: 'Could not submit the form due to a server error! Please try again.' })
        }
        else {
          resetForm();
          setMessage({ error: false, text: 'Thank you for submitting the form, you will be added to our WhatsApp group shortly.' });
        }

        setTimeout(function () { setMessage(false) }, 5000);
      }}>
      {function (isSubmitting) {
        return (
          <Form>
            <div>
              <label>Your Name:</label>
              <Field name='name' type="text" />
            </div>
            <div>
              <label>Your Class:</label>
              <Field name='class' type="text" />
            </div>
            <div>
              <label>WhatsApp Number:</label>
              <Field name='tel' type="tel" />
            </div>

            <button type="submit" className="btn btn-fill mt-3 sm:mt-4">JOIN RCRC</button>
          </Form>
        );
      }}
    </Formik>
  );
}