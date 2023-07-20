import React, { useState } from 'react';
import businessLogo from '../images/business-logo.jpg'


function Form() {

  const [formData, setFormData] = useState({
    personalName: '',
    address: '',
    email: '',
    phone: '',
    businessNAme: '',
    businessAddress: '',
    businessEmail: '',
    businessPhone: '',
    city: '',
    state: '',
    about: '',
    comments: '',
    partners: ''
  })

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }

  function submitToApi() { }

  function submitForm(event) {
    event.preventDefault();
    submitToApi(formData)
  }

  return (
    <div className='survey-form'>
      <div className='header'>
        <img src={businessLogo} alt='' />
        <div>
          <h2>Business-Hub Grant Application Form</h2>
          
        </div>
      </div>

      <form onSubmit={submitForm}>

      <h3>Fill in the form below to participate in the grant application</h3>
        <label htmlFor='personalName' className='label'>Name</label> <br />
        <input
          className='full-input'
          id='personalName'
          placeholder=''
          name='personalName'
          value={formData.personalName}
          onChange={handleChange}
        />

        <label htmlFor='address' className='label'>Address</label> <br />
        <input
          className='full-input'
          id='address'
          placeholder=''
          name='address'
          value={formData.address}
          onChange={handleChange}
        />


        <div className='half'>
          <div>
            <label htmlFor='email' className='label'>Email</label> <br />
            <input
              className='half-input'
              id='email'
              placeholder=''
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>

            <label htmlFor='phone' className='label'>Phone</label> <br />
            <input
              className='half-input'
              id='phone'
              placeholder=''
              name='phone'
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

        </div>

        <label htmlFor='businessName' className='label'>Business Name</label> <br />
        <input
          className='full-input'
          id='businessName'
          placeholder=''
          name='businessName'
          value={formData.businessNAme}
          onChange={handleChange}
        />

        <label htmlFor='businessAddress' className='label'>Business Address</label> <br />
        <input
          className='full-input'
          id='businessAddress'
          placeholder=''
          name='businessAddress'
          value={formData.businessAddress}
          onChange={handleChange}
        />

        <div className='half'>
          <div>
            <label htmlFor='businessEmail' className='label'>Business Email</label> <br />
            <input
              className='half-input'
              id='businessEmail'
              placeholder=''
              name='businessEmail'
              value={formData.businessEmail}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor='businessPhone' className='label'>Business Phone</label>
            <input
              className='half-input'
              id='businessPhone'
              placeholder=''
              name='businessPhone'
              value={formData.businessPhone}
              onChange={handleChange}

            />
          </div>

        </div>

        <div className='half'>
          <div>
            <span><label htmlFor='name' className='label'>City</label></span> <br />
            <input
              className='half-input'
              id='city'
              placeholder=''
              name='city'
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          <div>

            <label htmlFor='state' className='label'>State</label>
            <input
              className='half-input'
              id='state'
              placeholder=''
              name='state'
              onChange={handleChange}
            />
          </div>

        </div>

        <label htmlFor='partners' className='label'>How many partners do you have?</label> <br />
        <select
          id='partners'
          name='partners'
          value={formData.partners}
          onChange={handleChange}
        >
          <option value=''>Choose</option>
          <option value='sole'>Sole-proprietor</option>
          <option value='one'>One patner</option>
          <option value='two'>Two partners</option>
          <option value='more'>More than two partners</option>
        </select> <br /><br />
        <label htmlFor='' className='label' >How did you hear about us?</label> <br />
        <input
          type='radio'
          id='socialMedia'
          name='about'
          value='socialMedia'
          checked={formData.about.socialMedia}
          onChange={handleChange}
        />
        <label htmlFor='socialMedia'>Social Media</label><br />

        <input
          type='radio'
          id='friends'
          name='about'
          value='friends'
          checked={formData.about.friends}
          onChange={handleChange}
        />
        <label htmlFor='friends'>Friends</label>
        <br />

        <input
          type='radio'
          id='advertisement'
          name='about'
          value
          checked={formData.about.advertisement}
          onChange={handleChange}
        />
        <label htmlFor='advertisement'>Advertisement</label>
        <br />

        <input
          type='radio'
          id='others'
          name='about'
          value
          checked={formData.about.others}
          onChange={handleChange}
        />
        <label htmlFor='others'>Others</label> <br /> <br />

        <label htmlFor='comments' className='label'>Why should you be selected for this grant?</label> <br />

        <textarea id='comments' placeholder='not more than 500 words' />

        <div className='button-div'><button className='button'>Submit</button></div>

      </form>

    </div>
  );
}

export default Form;
