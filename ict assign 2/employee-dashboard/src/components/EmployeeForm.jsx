import React, { useState } from 'react';

export default function EmployeeForm() {
  const [form, setForm] = useState({ name: '', designation: '', location: '', salary: '' });
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(form);
  };

  return (
    <div>
      <h2>Employee Form</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Name</label>
          <input name="name" value={form.name} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Designation</label>
          <input name="designation" value={form.designation} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Location</label>
          <input name="location" value={form.location} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Salary</label>
          <input name="salary" value={form.salary} onChange={handleChange} className="form-control" type="number" />
        </div>
        <div className="col-12">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>

      {submitted && (
        <div className="mt-4">
          <h5>Submitted Data</h5>
          <ul className="list-group">
            <li className="list-group-item">Name: {submitted.name}</li>
            <li className="list-group-item">Designation: {submitted.designation}</li>
            <li className="list-group-item">Location: {submitted.location}</li>
            <li className="list-group-item">Salary: {submitted.salary}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
