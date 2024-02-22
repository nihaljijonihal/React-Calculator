
import { useState } from 'react';
import './App.css'
import Button from '@mui/material/Button';
import {TextField }from '@mui/material';


function App() {


  const [result,setResult] = useState(0)


  return (
    <>
      
      <div className="mainn">
        <div className="calculator">

          <div className='result'>
            {result}
          </div>

      <div>
          <Button className='m-1 commonBtn' style={{backgroundColor:'#000000'}} variant="contained" onClick={e=>setResult('')}>AC</Button>
          <Button className='m-1 commonBtn' style={{backgroundColor:'#000000'}}  variant="contained" onClick={e=>setResult(result.slice(0,-1))}>DE</Button>
          <Button className='m-1 commonBtn' style={{backgroundColor:'#000000'}}  variant="contained" onClick={e=>setResult(result+'.')}>.</Button>
          <Button className='m-1 commonBtn' style={{backgroundColor:'#000000'}}  variant="contained" onClick={e=>setResult(result+'/')}>/</Button>
      </div>
      <div>
          <Button className='m-1 commonBtn' style={{backgroundColor:'#000000'}}  variant="contained" onClick={e=>setResult(result+'7')}>7</Button>
          <Button className='m-1 commonBtn' style={{backgroundColor:'#000000'}}  variant="contained" onClick={e=>setResult(result+'8')}>8</Button>
          <Button className='m-1 commonBtn' style={{backgroundColor:'#000000'}}  variant="contained" onClick={e=>setResult(result+'9')}>9</Button>
          <Button className='m-1 commonBtn' style={{backgroundColor:'#000000'}}  variant="contained" onClick={e=>setResult(result+'*')}>*</Button>
      </div>
      <div>
          <Button className='m-1 commonBtn' style={{backgroundColor:'#000000'}}  variant="contained" onClick={e=>setResult(result+'4')}>4</Button>
          <Button className='m-1 commonBtn' style={{backgroundColor:'#000000'}}  variant="contained" onClick={e=>setResult(result+'5')}>5</Button>
          <Button className='m-1 commonBtn' style={{backgroundColor:'#000000'}}  variant="contained" onClick={e=>setResult(result+'6')}>6</Button>
          <Button className='m-1 commonBtn' style={{backgroundColor:'#000000'}}  variant="contained" onClick={e=>setResult(result+'+')}>+</Button>
      </div>
      <div>
          <Button className='m-1 commonBtn' style={{backgroundColor:'#000000'}} variant="contained" onClick={e=>setResult(result+'1')}>1</Button>
          <Button className='m-1 commonBtn' style={{backgroundColor:'#000000'}} variant="contained" onClick={e=>setResult(result+'2')}>2</Button>
          <Button className='m-1 commonBtn' style={{backgroundColor:'#000000'}} variant="contained" onClick={e=>setResult(result+'3')}>3</Button>
          <Button className='m-1 commonBtn' style={{backgroundColor:'#000000'}} variant="contained" onClick={e=>setResult(result+'-')}>-</Button>
      </div>

      <div>
          <Button className='m-1 commonBtn' style={{backgroundColor:'#000000'}} variant="contained" onClick={e=>setResult(result+'00')}>00</Button>
          <Button className='m-1 commonBtn' style={{backgroundColor:'#000000'}} variant="contained" onClick={e=>setResult(result+'0')}>0</Button>
          <Button className='m-1 equal' style={{backgroundColor:'#000000'}} variant="contained" onClick={e=>setResult(eval(result))}>=</Button>

      </div>
 
        



        </div>
      </div>
    </>
  )
}

export default App
