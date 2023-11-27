import { CssBaseline, Typography,Box,Stack } from '@mui/material'
import React,{useState,useEffect} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import axios from 'axios'
import { VerticalAlignBottom } from '@mui/icons-material';

const Member = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    axios.get('https://localhost:7224/api/Users')
      .then(res => {
        setData(res.data)
      }).catch(err => {
        console.log(err)
        setError(true)
      })
  }, [])

  const cellStyle = {
    th : {
      textAlign: 'center',
      verticalAlign: 'middle',
      backgroundColor: '#f0f0f0',
      border: '1px solid #ccc',
      height: '50px',
      borderRadius: '5px',
      color: '#f00'
    },
    td : {
      textAlign: 'center',
      verticalAlign: 'middle',
      backgroundColor: '#f0f0f0',
      border: '1px solid #ccc',
      height: '100px',
      borderRadius: '5px'
    },
    };

  return (
    <>
    <Box sx={{ display: 'flex' }} >

      <CssBaseline/>
      <NavBar/>
      <Box component="main" sx={{ flexGrow: 1, p: 0, backgroundColor: '#f9f9f9', borderRadius: '5px',padding:'70px 0 0 20px' }}>
      <table style={{ width: '100%', height: 'auto' }}> 
          <tr>
            <th style={cellStyle.th}>NAME</th>
            <th style={cellStyle.th}>EMAIL</th>
            <th style={cellStyle.th}>ROLE</th>
          </tr>
          {data.map((item, index) => (
          <tr key={item.UId}>
            <td style={cellStyle.td}>{item.lastName}</td>
            <td style={cellStyle.td}>{item.email}</td>
            <td style={cellStyle.td}> {(item.role === 0) ? 'user' : (item.role === 1 ? 'Initative Evaluator' : (item.role === 2 ? 'Initiative Lead' : 'Supervisor'))}</td>
          </tr>
          ))}
      </table>
      </Box>
    </Box>
    </>
  )
}

export default Member