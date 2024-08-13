import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  price: Yup.number().required('Required').positive('Must be a positive number')
});

const UpdateItem = ({ match }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/items/${match.params.id}`)
      .then(response => setItem(response.data))
      .catch(error => console.error('Error fetching item:', error));
  }, [match.params.id]);

  const handleSubmit = (values) => {
    axios.put(`http://localhost:5000/items/${match.params.id}`, values)
      .then(() => alert('Item updated successfully'))
      .catch(error => console.error('Error updating item:', error));
  };

  if (!item) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>Update Item</h1>
      <Formik
        initialValues={item}
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
              <label htmlFor="description">Description</label>
              <Field type="text" id="description" name="description" className="form-control" />
              <ErrorMessage name="description" component="div" className="text-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <Field type="number" id="price" name="price" className="form-control" />
              <ErrorMessage name="price" component="div" className="text-danger" />
            </div>
            <button type="submit" className="btn btn-primary">Update Item</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateItem;
