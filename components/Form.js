import { useMemo } from 'react';
import { Formik, Field as _Field, Form as _Form, ErrorMessage } from 'formik';

export function Field({ name, children, className = '', ...props }) {
  function ErrorContainer({ children }) {
    return <span className='form-error'>{children}</span>;
  }
  return (
    <div className={className}>
      <label>{children}:</label>
      <_Field name={name} {...props} />
      <ErrorMessage name={name} component={ErrorContainer} />
    </div>
  );
};

export default function Form({ schema, api, children, submit }) {
  const fields = useMemo(function () {
    var fields = schema.describe().fields;

    Object.keys(fields).forEach(function (f) {
      fields[f] = '';
    });

    return fields;
  }, [schema]);

  return (
    <Formik
      validationSchema={schema}
      initialStatus={{
        show: 'hide',
        error: false
      }}
      initialValues={fields}
      onSubmit={async function (values, { resetForm, setStatus }) {
        const resp = await fetch(`/api/${api}`, {
          method: 'POST',
          body: JSON.stringify(values)
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
          <_Form>
            {children}

            <div className='flex flex-row gap-x-6'>
              <button type="submit" className="btn btn-fill" disabled={isSubmitting}>{submit}</button>
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
                'Thank you for submitting the form, your response has been recorded'
              }
            </div>
          </_Form>
        );
      }}
    </Formik>
  );
}