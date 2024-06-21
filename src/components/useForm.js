// src/components/useForm.js
import { useState, useEffect } from 'react';

const useForm = (validate) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    age: '',
    isAttendingWithGuest: 'no',
    guestName: '',
    submitted: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    if (Object.keys(validate(values)).length === 0) {
      setValues({ ...values, submitted: true });
    }
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
