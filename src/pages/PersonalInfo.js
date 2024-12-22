import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateFormData } from '../redux/slice';
import { useNavigate } from 'react-router-dom';

function PersonalInfo() {

const dispatch = useDispatch();
const navigate = useNavigate();
const formData = useSelector((state) => state.form)

const handleChange = (e) => {
    e.preventDefault()
    dispatch(updateFormData({[e.target.name ]:e.target.value}))
}
const handleNext = (e) => {
    e.preventDefault()
    navigate('/contact-info',{ state: { formData } })
}

  return (
    <form>
        <label>First Name</label>
        <input
        name='firstName'
        value={formData?.firstName }
        onChange={handleChange}
        type='text'
        />
        <label>Last Name</label>
        <input
        name='lastName'
        value={formData?.lastName}
        onChange={handleChange}
        type='text'
        />
        <button onClick={handleNext}>Next</button>
    </form>
  )
}

export default PersonalInfo