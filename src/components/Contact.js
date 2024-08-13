import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  message: Yup.string().required('Required')
});

const Contact = () => {
  const handleSubmit = (values, { resetForm }) => {
    alert('Message sent successfully');
    resetForm();
  };

  return (
    <div className="container">
      <h1 className="text-center">Contact Us</h1>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" className="form-control" />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <Field as="textarea" id="message" name="message" className="form-control" rows="4" />
              <ErrorMessage name="message" component="div" className="text-danger" />
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
