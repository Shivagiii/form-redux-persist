import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateFormData } from '../redux/slice';
import { useLocation, useNavigate } from 'react-router-dom';

function ContactInfo() {

const dispatch = useDispatch();
const navigate = useNavigate();
const location = useLocation()


const forData = location.state || {};
const formData = useSelector((state) => state.form);
console.log(forData)


const handleChange = (e) => {
    e.preventDefault()
    dispatch(updateFormData({[e.target.name ]:e.target.value}))
}
const handleNext = (e) => {
    e.preventDefault()
    navigate('/')
}

  return (
    <div>  
        <h5>Hello {formData?.firstName},</h5>
        
          <form>
    <label>Number</label>
    <input
    name='number'
    value={formData?.number }
    onChange={handleChange}
    type='number'
    />
    <label>Email</label>
    <input
    name='email'
    value={formData?.email}
    onChange={handleChange}
    type='text'
    />
    <button onClick={handleNext}>Next</button>
</form></div>

  )
}

export default ContactInfo