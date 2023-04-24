import {React,useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';


function CircularProgressWithLabel(props) {
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
                <Typography variant="caption" component="div" color="text.secondary" sx={{fontSize:'30px'}}>
                    {`${Math.round(props.value)}%`}
                </Typography>
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
    axios.get('https://localhost:44338/api/Tasks')
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


    return <>
                <Typography variant='h5' paddingLeft='30px'>Project Completion Rate</Typography>
                <Box  
                  sx={{
                    boxShadow: 2,
                    borderColor: 'gray',
                    width: 350,
                    height: 165,
                    padding: 2,
                    paddingLeft:12,
                    marginRight:10,
                    borderRadius: '5px',
                    backgroundColor: '#fff'
                    
                  }}>
                    <CircularProgressWithLabel size="9rem" value={(error !== true) ? percentage : 75} />
                    
                </Box>
    </>
}