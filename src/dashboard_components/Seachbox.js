import React, { useState } from 'react'
import { TextField } from '@mui/material'

const Seachbox = () => {
    const [input, setInput] = useState("");
  return (
    <>
        <TextField 
            size='small' 
            placeholder='Type to Search...' 
            variant="outlined" 
            sx={{ width: '320px' }} value={input} 
            onChange={(e)=> setInput(e.target.value)}>
        </TextField>
    </>
  )
}

export default Seachbox