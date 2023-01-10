import React, { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export  const Signup=()=>{

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [date,setDate]=useState('')
    const [placeOfBirth,setPlaceOfBirth]=useState('')
    const navigate=useNavigate()
    
    useEffect(()=>{
        const auth=localStorage.getItem('user')
        if(auth){
            navigate('/')
        }
    })

    const collectdata=async()=>{
        console.log(name,email,date)
        let result=await fetch('http://localhost:5999/register',{
            method: 'post',
            body: JSON.stringify(  {name,email,date,placeOfBirth}),
            headers:{ 
                'Content-Type':'application/json'
            },
        })
        result=await result.json()
        console.log(result)
        if(result){
            localStorage.setItem('user',JSON.stringify(result))
            navigate('/')
        }
    }

    return(
        <div className='register'>
            <h1>Info of Candidates</h1>
            <input className='inputbox' type='text' placeholder="Enter name" 
            value={name}
            onChange={(e)=>setName(e.target.value)} />
            
            <input className='inputbox' type='text' placeholder="Enter Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}/>
            
            <input className='inputbox' type='date' placeholder="Enter date"
            value={date}
            onChange={(e)=>setDate(e.target.value)}/>

            <input className='inputbox' type='text' placeholder="Enter Placeofbirth"
            value={placeOfBirth}
            onChange={(e)=>setPlaceOfBirth(e.target.value)}/>

         <label className='inputbox' for="job">Choose a Job:

           <select name="job" className='inputbox'>
           <option value="job1">job1</option>
           <option value="job2">job2</option>
           <option value="job3">job3</option>
           <option value="job4">job4</option>
         </select></label>

            <button onClick={collectdata} className='appbutton' type='button'>Enter all Info</button>

        </div>
    )
}