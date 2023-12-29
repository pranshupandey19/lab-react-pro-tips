import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
//state to check if the form is submitted 
  const [formSubmit,setFormSubmit] = useState(false)
  // state to keep tract of all errors
  const [formErr,setFormErr] = useState({})
  // state to keep all form Data
  const [formData,setFormData] = useState({
    email:"",
    firstName:"",
    lastName:"",
    phone:""
  })

  const handleInputChange = e =>{
    let{name,value} = e.target
    console.log("value: ", value);
    console.log("name: ", name);

    setFormData({
      ...formData,
      [name]:value
    })

  }

  const formSubmitHandler = (e)=>{

    e.preventDefault()

    console.log(formData);
    let errors = validate(formData)
    setFormErr(errors)

    let errKeyArray = Object.keys(errors)

    if(errKeyArray.length == 0){
      setFormSubmit(true)
      toast.success("Form Submitted");
    }
    else{
      setFormSubmit(false)
    }
  }

  const validate = (data)=>{
    let error ={}

    if(data.firstName.trim()==""){
      error.firstName = "Please enter your First Name"
      toast.error("Please enter your First Name");

    }
    if(data.lastName.trim()==""){
      error.lastName = "Please enter your Last Name"
      toast.error("Please enter your Last Name");
      
    }
    if(data.phone.trim()==""){
      error.phone = "Please enter your Phone no"
      toast.error("Please enter your Phone no");

    }
    if(data.email.trim()==""){
      error.email = "Please enter your Email"
      toast.error("Please enter your Email");

    }
    if(data.phone.trim().length !=10){
      error.phone = "Please enter correct phone no"
      toast.info("Please enter correct phone no");

    }
    
    return error
  }
  
  console.log(formData);
  return (
    <div className='form-container'>

      <fieldset>
        <legend>
          Fill This Form
        </legend>
        <form onSubmit={formSubmitHandler}>
        <ToastContainer />

          {formSubmit &&   <div className='success'>
            <p>Registration Succesfull</p>
          </div>}

          <label >First Name:</label>
          <input type="text" name='firstName' onChange={handleInputChange}/>
          {formErr.firstName && <p className='err'>{formErr.firstName}</p>}
          <label >Last Name:</label>
          <input type="text" name='lastName' onChange={handleInputChange}/>
          {formErr.lastName && <p className='err'>{formErr.lastName}</p>}


          <label >Email:</label>
          <input type="email" name='email' onChange={handleInputChange}/>
          {formErr.email && <p className='err'>{formErr.email}</p>}


          <label >Phone:</label>
          <input type="number" name='phone' onChange={handleInputChange}/>
          {formErr.phone && <p className='err'>{formErr.phone}</p>}


          <input type="submit" value={"Register"} />

        </form>
      </fieldset>
      
    </div>
  )
}

export default Form