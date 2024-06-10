import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const { state } = useLocation();
  const { formData } = state;

  const labelStyle = {
    fontWeight: 'bold',
    color: '#f1f1f1',
  };

  return (
    <div>
      <h1>Form Submitted Successfully!</h1>
      <div>
        <span style={labelStyle}>First Name:</span> {formData.firstName}
      </div>
      <div>
        <span style={labelStyle}>Last Name:</span> {formData.lastName}
      </div>
      <div>
        <span style={labelStyle}>Username:</span> {formData.userName}
      </div>
      <div>
        <span style={labelStyle}>E-mail:</span> {formData.email}
      </div>
      <div>
        <span style={labelStyle}>Phone No.:</span> {formData.phoneNo}
      </div>
      <div>
        <span style={labelStyle}>Country:</span> {formData.country}
      </div>
      <div>
        <span style={labelStyle}>City:</span> {formData.city}
      </div>
      <div>
        <span style={labelStyle}>PAN No.:</span> {formData.panNo}
      </div>
      <div>
        <span style={labelStyle}>Aadhar No.:</span> {formData.aadharNo}
      </div>
    </div>
  );
};

export default Success;
