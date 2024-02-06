import {React,useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';


const CircularProgressWithLabel = (props) => {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>  
                <CircularProgress variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >   
              <Box style={{position:'relative'}}>
                <Typography variant="caption" component="div" color="#2A1992" sx={{fontSize:'25px',fontWeight:600}}>
                    {`${Math.round(props.value)}%`}
                </Typography>
                <Typography variant="caption" component="div" color="#2A1992" sx={{fontSize:'10px',fontWeight:600,position:'absolute',top:30,flexWrap:'nowrap',left:'-1 px',width:'100%'}}>
                    Completed
                </Typography>
                </Box>
            </Box>
        </Box>
    );
}
CircularProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};

export default function CircleProgressBar() {
    const [data, setData] = useState([])
    const [error, setError] = useState(false);

  useEffect(() => {
    axios.get('https://localhost:7224/api/Tasks')
      .then(res => {
        setData(res.data)
      }).catch(err => {console.log(err)
                        setError(true)})
  }, [])

  const arr1 = data.filter(item => item.currentProgress < 3).map((item, index) => (
    <Typography variant='p'  marginLeft='10px'>{item.taskName}</Typography>
 ))
  const arr2 = data.filter(item => item.currentProgress === 2).map((item, index) => (
    <Typography variant='p'  marginLeft='10px'>{item.taskName}</Typography>
 ))
    let percentage =  (parseInt(arr2.length*100/(arr1.length || 1)))
    console.log(percentage)


    return (
    <>
        <Typography variant='h5'>Project Completion Rate</Typography>
        <Box  
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: 2,
            borderColor: 'gray',
            width: '90%',
            height: 150,
            borderRadius: '5px',
            backgroundColor: '#fff',
          }}>
            <CircularProgressWithLabel size="7rem" value={(error !== true) ? percentage : 75} />
            
        </Box>
    </>
    )
}