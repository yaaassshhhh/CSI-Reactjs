//Fields required: First Name, Last Name, Username, E-mail, password (show/hide), PhoneNo. (country code ____ number), country (dropdown), city (dropdown), Pan No. & Aadhar No.
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Form() {

  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    localName: '',
    userName: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });

  const validate = () => {
    const inputErrors = {};

    if (!formData.firstName) inputErrors.firstName = 'First Name is required';
    if (!formData.lastName) inputErrors.lastName = 'Last Name is required';
    if (!formData.userName) inputErrors.userName = 'Username is required';
    if (!formData.email) inputErrors.email = 'Email is required';
    if (!formData.password) inputErrors.password = 'Password is required';
    if (!formData.phoneNo) inputErrors.phoneNo = 'Phone Number is required';
    if (!formData.country) inputErrors.country = 'Country is required';
    if (!formData.city) inputErrors.city = 'City is required';
    if (!formData.panNo) inputErrors.panNo = 'Pan Number is required';
    if (!formData.aadharNo) inputErrors.aadharNo = 'Aadhar Number is required';
    setError(inputErrors);

    if (Object.keys(inputErrors).length === 0) return true;
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validate()){
      navigate('/success',{state : {formData}});
    }
  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  return ( <>
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name :- </label>
        <input 
          onChange={handleChange}
          type="text"
          name='firstName'
          value={formData.firstName}
        />
        {error.firstName && <span>{error.firstName}</span>}
      </div>
      <div>
        <label>Last Name :- </label>
        <input 
          onChange={handleChange}
          type="text"
          name='LastName'
          value={formData.lastName}
        />
        {error.lastName && <span>{error.lastName}</span>}
      </div>
      <div>
        <label>Username :- </label>
        <input 
          onChange={handleChange}
          type="text"
          name='userName'
          value={formData.userName}
        />
        {error.userName && <span>{error.userName}</span>}
      </div>
      <div>
        <label>Email :- </label>
        <input 
          onChange={handleChange}
          type="email"
          name='email'
          value={formData.email}
        />
        {error.email && <span>{error.email}</span>}
      </div>
      <div>
        <label>Password :-</label>
        <input 
          onChange={handleChange}
          type={showPassword ? 'text' : 'password'}
          name='password'
          value={formData.password}
        />
        <button
          onClick={
            () => setShowPassword(!showPassword)
          }>
          {showPassword ? 'Hide' : 'Show'}
        </button>
        {error.password && <span>{error.password}</span>}
      </div>
      <div>
        <label>Phone No :-</label>
        <input 
          onChange={handleChange}
          type='number'
          name = "phoneNo"
          value = {formData.phoneNo}
        />
        {error.phoneNo && <span>{error.phoneNo}</span>}
      </div>
      <div>
        <label>Country :-</label>
        <select
          onChange={handleChange}
          name = "country"
          value = {formData.country}
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Srilanka">Srilanka</option>
          <option value="Singapore">Singapore</option>
        </select>
        {error.country && <span>{error.country}</span>}
      </div>
      <div>
        <label>City :-</label>
        <select
          onChange={handleChange}
          name = "city"
          value = {formData.city}
        >
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Chennai">Chennai</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Patna">Patna</option>
          <option value="Bhubaneswar">Bhubaneswar</option>
        </select>
        {error.city && <span>{error.city}</span>}
      </div>
      <div>
        <label>Pan No :-</label>
        <input 
          onChange={handleChange}
          type='text'
          name = "panNo"
          value = {formData.panNo}
        />
        {error.panNo && <span>{error.panNo}</span>}
      </div>
      <div>
        <label>Aadhar No :-</label>
        <input 
          onChange={handleChange}
          type='text'
          name = "aadharNo"
          value = {formData.aadharNo}
        />
        {error.aadharNo && <span>{error.aadharNo}</span>}
      </div>
      <button
        type='submit'
        // disabled ={validate()} cant usse validate as it will run on every render 
        // onClick = {() => navigate('/success')} will not work as we have to validate the form first and will not prevent default behaviour of form submission
        // disabled = {Object.keys(error).length > 0}
      >
        Submit
      </button> 
    </form>
    </>  
  )
}
