import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateUser() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate()


      const submit  = (e)=>{
         e.preventDefault()
        axios.post("http://localhost:4000/create",{name,email,password})
        .then((res)=>{
          console.log(res)
          navigate('/')
        })

      }
   
  return (
    <div>
        <form onSubmit={submit}>
            <h1>Add User</h1>
            <label htmlFor=''>name</label>
            <input type='text' placeholder='enter your name' onChange={(e)=>setName(e.target.value)}/><br/><br/>

            <label htmlFor=''>email</label>
            <input type='email' placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)}/><br/><br/>

            <label htmlFor=''>password</label>
            <input type='password' placeholder='apna password enter karo yha par' onChange={(e)=>setPassword(e.target.value)}/><br/><br/>

            <button className='btn btn-success'>Submit</button>
        </form>
    </div>
  )
}

export default CreateUser