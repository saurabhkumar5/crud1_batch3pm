import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'

function Update() {

              
            const {id}  = useParams()
            const navigate = useNavigate()
            // let i = 'http://localhost:4000/updateUser/'+id
            // console.log(i)
            // console.log(id)
          const [name,setName] = useState()
          const [email,setEmail] = useState()
          const [password,setPassword] = useState()
          // console.log(name,email,password)

    useEffect(()=>{

        axios.get('http://localhost:4000/getuser/'+id)
        .then((res)=>{
          setName(res.data.name)
          setEmail(res.data.email)
          setPassword(res.data.password)
        })

       },[])

       function Update(e){
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
            <h1>Update User</h1>
            <label htmlFor=''>name</label>
            <input type='text' placeholder='enter your name' value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>

            <label htmlFor=''>email</label>
            <input type='email' placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>

            <label htmlFor=''>password</label>
            <input type='password' placeholder='apna password enter karo yha par'  value={password} onChange={(e)=>setPassword(e.target.value)}/><br/><br/>

            <button className='btn btn-success'>Update</button>
        </form>
    </div>
  )
}

export default Update