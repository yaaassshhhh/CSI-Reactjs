//Fields required: First Name, Last Name, Username, E-mail, password (show/hide), PhoneNo. (country code ____ number), country (dropdown), city (dropdown), Pan No. & Aadhar No.
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Form() {

  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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

  const [isClicked,setIsClicked] = useState(false);

  const buttonStyle = {
    transition : "trandform 0.2s",
    transform : isClicked? "scale(0.9)" : "scale(1)"
  }

  return ( <>
  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
  <h1 className='text-white text-center my-3 '>Form Submission</h1>
  
    <form onSubmit={handleSubmit}>
    <div className='flex shadow rounded-lg  space-x-2 overflow-hidden mb-4'>
        <label className='whitespace-nowrap'>First Name  </label>
        <input 
          className='outline-none w-full py-1 px-3'
          onChange={handleChange}
          type="text"
          name='firstName'
          value={formData.firstName}
        />
        {error.firstName && <span>{error.firstName}</span>}
      </div>
      <div className='flex shadow rounded-lg  space-x-2 overflow-hidden mb-4'>
        <label className='whitespace-nowrap'>Last Name  </label>
        <input 
        className='outline-none w-full py-1 px-3'
          onChange={handleChange}
          type="text"
          name='lastName'
          value={formData.lastName}
        />
        {error.lastName && <span>{error.lastName}</span>}
      </div>
      <div className='flex shadow rounded-lg  space-x-2 overflow-hidden mb-4'>
        <label className='whitespace-nowrap'>Username  </label>
        <input 
        className='outline-none w-full py-1 px-3'
          onChange={handleChange}
          type="text"
          name='userName'
          value={formData.userName}
        />
        {error.userName && <span>{error.userName}</span>}
      </div>
      <div className='flex shadow rounded-lg  space-x-2 overflow-hidden mb-4'>
        <label className='whitespace-nowrap'>Email  </label>
        <input 
        className='outline-none w-full py-1 px-3'
          onChange={handleChange}
          type="email"
          name='email'
          value={formData.email}
        />
        {error.email && <span>{error.email}</span>}
      </div>
      <div className='flex shadow rounded-lg  space-x-2 overflow-hidden mb-4'>
        <label className='whitespace-nowrap'>Password </label>
        <input 
        className='outline-none w-full py-1 px-3'
          onChange={handleChange}
          type={showPassword ? 'text' : 'password'}
          name='password'
          value={formData.password}
        />
        <button
        style={
            buttonStyle
          }
          onMouseDown={()=>setIsClicked(true)}
          onMouseUp={()=>setIsClicked(false)}
          onMouseLeave={()=>setIsClicked(false)}
        className='outline-none bg-blue-700 text-white px-3 py-1.5 shrink-0'
          onClick={
            () => setShowPassword(!showPassword)
          }>
          {showPassword ? 'Hide' : 'Show'}
        </button>
        {error.password && <span>{error.password}</span>}
      </div>
      <div className='flex shadow rounded-lg  space-x-2 overflow-hidden mb-4'>
        <label className='whitespace-nowrap'>Phone No </label>
        <input 
        className='outline-none w-full py-1 px-3'
          onChange={handleChange}
          type='number'
          name = "phoneNo"
          value = {formData.phoneNo}
        />
        {error.phoneNo && <span>{error.phoneNo}</span>}
      </div>
      <div className='flex shadow rounded-lg  space-x-2 overflow-hidden mb-4'>
        <label className='whitespace-nowrap'>Country </label>
        <select
        className='outline-none w-full py-1 px-3'
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
      <div className='flex shadow rounded-lg  space-x-2 overflow-hidden mb-4'>
        <label className='whitespace-nowrap'>City </label>
        <select
        className='outline-none w-full py-1 px-3'
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
      <div className='flex shadow rounded-lg  space-x-2 overflow-hidden mb-4'>
        <label className='whitespace-nowrap'>Pan No </label>
        <input 
        className='outline-none w-full py-1 px-3'
          onChange={handleChange}
          type='text'
          name = "panNo"
          value = {formData.panNo}
        />
        {error.panNo && <span>{error.panNo}</span>}
      </div>
      <div className='flex shadow rounded-lg  space-x-2 overflow-hidden mb-4'>
        <label className='whitespace-nowrap'>Aadhar No </label>
        <input 
        className='outline-none w-full py-1 px-3'
          onChange={handleChange}
          type='text'
          name = "aadharNo"
          value = {formData.aadharNo}
        />
        {error.aadharNo && <span>{error.aadharNo}</span>}
      </div>
      <button
      style={
            buttonStyle
          }
          onMouseDown={()=>setIsClicked(true)}
          onMouseUp={()=>setIsClicked(false)}
          onMouseLeave={()=>setIsClicked(false)}
      className='outline-none bg-blue-700 text-white px-3 py-1.5 shrink-0 rounded-lg'
        type='submit'
        // disabled ={validate()} cant usse validate as it will run on every render 
        // onClick = {() => navigate('/success')} will not work as we have to validate the form first and will not prevent default behaviour of form submission
        // disabled = {Object.keys(error).length > 0}
      >
        Submit
      </button> 
    </form>
    </div>
    </>  
  )
}
