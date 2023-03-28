import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';



export default function CustomizedProgressBars() {
  return (
    <LinearProgress
  determinate
  size="sm"
  value={20}
  variant="soft"
/>);
}