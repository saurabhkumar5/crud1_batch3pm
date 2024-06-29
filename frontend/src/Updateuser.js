import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'

function Updateuser() {
        const {id} = useParams()
        const navigate = useNavigate()
        // console.log(id)
        const [name, setName] = useState()
        const [email, setEmail] = useState()
        const [password, setPassword] = useState()

    useEffect(()=>{

        axios.get('http://localhost:4000/getUser/'+id)
        .then(res=>{
            setName(res.data.name)
            setEmail(res.data.email)
            setPassword(res.data.password)
        })     
      },[])
      const Update = (e)=>{
        e.preventDefault()
        axios.put('http://localhost:4000/updateUser/'+id,{name,email,password})
        .then(res=>{
            console.log(res)
            navigate('/')
        })
      }


  return (
    <div>
        <form onSubmit={Update}>
            <h1>Update  User</h1>
            <label htmlFor=''>name</label>
            <input type='text' placeholder='enter your name' value={name}
            onChange={(e)=>setName(e.target.value)}
            /><br/><br/>

            <label htmlFor=''>email</label>
            <input type='email' placeholder='enter your email' value={email} 
            onChange={(e)=>setEmail(e.target.value)}
            /><br/><br/>

            <label htmlFor=''>password</label>
            <input type='password' placeholder='apna password enter karo yha par' value={password}
            onChange={(e)=>setPassword(e.target.value)}
            /><br/><br/>

            <button className='btn btn-success'>Update</button>
        </form>
    </div>
  )
}

export default Updateuser