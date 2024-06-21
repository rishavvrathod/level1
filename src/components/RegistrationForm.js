import React, { useState } from 'react';
import useForm from './useForm';
import validateInfo from './Validateinfo';

const EventRegistrationForm = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validateInfo);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={values.name} onChange={handleChange} />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={values.email} onChange={handleChange} />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Age</label>
          <input type="number" name="age" value={values.age} onChange={handleChange} />
          {errors.age && <p>{errors.age}</p>}
        </div>
        <div>
          <label>Are you attending with a guest?</label>
          <select name="isAttendingWithGuest" value={values.isAttendingWithGuest} onChange={handleChange}>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        {values.isAttendingWithGuest === 'yes' && (
          <div>
            <label>Guest Name</label>
            <input type="text" name="guestName" value={values.guestName} onChange={handleChange} />
            {errors.guestName && <p>{errors.guestName}</p>}
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
      {values.submitted && (
        <div className="summary">
          <h3>Summary</h3>
          <p>Name: {values.name}</p>
          <p>Email: {values.email}</p>
          <p>Age: {values.age}</p>
          <p>Attending with a guest: {values.isAttendingWithGuest}</p>
          {values.isAttendingWithGuest === 'yes' && <p>Guest Name: {values.guestName}</p>}
        </div>
      )}
    </div>
  );
};

export default EventRegistrationForm;
