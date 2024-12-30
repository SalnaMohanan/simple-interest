
import { Button, Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'
      

function App() {

  const [principal, setPrincipal]=useState(0)
  const [rate, setRate]=useState(0)
  const [year, setYear]=useState(0)
  const [interest, setInterest]=useState(0)

  const [invalidPrincipal,setInvalidPrincipal] =useState(false)
  const [invalidRate,setInvalidRate ]=useState(false)
  const [invalidYear,setInvalidYear] =useState(false)


  const validateInpute=(tag)=>{
    console.log(typeof tag);
    const {name , value} =tag
    console.log(name ,value);
    
    console.log(!!value.match(/^\d+(\.\d+)?$/));

   
    if(name=='principal'){
      setPrincipal(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setInvalidPrincipal(false)
      }else{
        setInvalidPrincipal(true)
      }
    }else if(name=='rate'){
      setRate(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setInvalidRate(false)
      }else{
        setInvalidRate(true)
      }
    }else if(name=='year'){
      setYear(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setInvalidYear(false)
      }else{
        setInvalidYear(true)
      }
    }
  }
    const handlCalculate = (e)=>{
      e.preventDefault()
      console.log("inside calculate");
      if(principal&&rate&&year){
        setInterest(principal*year*rate/100)
      
      }else{
        alert("pls fill the form completly")
      }
    }
      
      const handleReset =()=>{
        setInterest(0)
        setRate(0)
        setPrincipal(0)
        setYear(0)
        setInvalidPrincipal(0)
        setInvalidRate(0)
        setInvalidYear(0)
      }
 // expression support decimal only /^\d+(\.\d+)?$/1
 
    return (
    <>
      <div style={{width:'100%' , minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
        <div style={{width:'600px'}} className='bg-light rounded p-5'>
          <h3 className='text-center'>Simple Intrerst App</h3>
          <p className='text-center'>Calculate your simple interest Easily!</p>
          <div className='bg-warning p-3 text-light text-center rounded'>
            <h1>₹ {interest}</h1>
            <p className='fw-bolder'>Total Simple Interst</p>

          </div>
          <form className='mt-5'>
            {/* principle aamount */}
            <div className='mb-3'>
              <TextField value={principal||""} name='principal' onChange={e=>validateInpute(e.target)} className='w-100' id="outlined-basic" label="principal amount" variant="outlined" />
            </div>
           
            {/* invalid principal */}
            {
            invalidPrincipal && <div className='text-danger fw-bolder mb-3'>
              Invalid Pricipal Amount
            </div>
            }

            {/* rate amount*/}
            <div className='mb-3'>
            <TextField value={rate||""} name='rate' onChange={e=>validateInpute(e.target)}  className='w-100' id="outlined-basic" label="Rate" variant="outlined" />
            </div>

            {/* invalid rate */}
            {
            invalidRate && <div className='text-danger fw-bolder mb-3'>
              Invalid Rate Amount
            </div>
            }

            {/* year */}
            <div className='mb-3'>
            <TextField value={year||""} name='year' onChange={e=>validateInpute(e.target)}  className='w-100' id="outlined-basic" label="Year" variant="outlined" />
            </div>

            {/* invalid rate */}
            {
            invalidYear && <div className='text-danger fw-bolder mb-3'>
              Invalid year
            </div>
            }


          <Stack direction="row" spacing={2}>
          <Button type='submit' onClick={handlCalculate} disabled={invalidPrincipal || invalidRate|| invalidYear} style={{width:'50%' , height:'40px '}} className='bg-dark' variant="contained">Calculate</Button>
          <Button onClick={handleReset} style={{width:'50%' , height:'40px '}} className='border border-dark text-dark' variant="outlined">Reset</Button>
          </Stack>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
