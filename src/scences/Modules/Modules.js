import { CssBaseline, Typography,Box } from '@mui/material'
import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { cardContents } from '../../Content/CardContents'
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Stack from '@mui/joy/Stack';
import LinearProgress from '@mui/joy/LinearProgress';
const Modules = () => {
  return (
    <>
    <Box sx={{ display: 'flex' }} >

      <CssBaseline/>
      <NavBar/>
      <Box component="main" sx={{ flexGrow: 1, p: 0, backgroundColor: '#f9f9f9', borderRadius: '5px',padding:'70px 0 0 20px' }}>
      <Box style={{display:'grid',alignItems:'center',gridTemplateColumns:'repeat(3,1fr)'}}>
            {
              cardContents.map((content,index) => {
                return(
                  <Card key={index} sx={{ Width: 400,margin:'10px' }}>
                    <CardMedia
                      component="img"
                      height="100"
                      image={content.image}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {content.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {content.description}
                      </Typography>
                    </CardContent>
                    {/* <Typography variant="body2" color="text.primary" style={{marginLeft:15,marginBottom:10}}>Members</Typography>
                    <AvatarGroup style={{marginLeft:20}}>
                      <Avatar alt="Remy Sharp" src={content.image} />
                      <Avatar alt="Travis Howard" src={content.image} />
                      <Avatar alt="Cindy Baker" src={content.image}/>
                      <Avatar>+3</Avatar>
                    </AvatarGroup>
                    <Typography variant="body2" color="text.primary" style={{margin:'10px 15px'}}>Progress</Typography>
                    <Stack spacing={2} sx={{ flex: 0.5,margin:'10px 0',padding:'5px 10px' }}>
                      <LinearProgress determinate value={25} />
                    </Stack> */}
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                )
              })
            }
        </Box>
      </Box>
    </Box>
    </>
  )
}

export default Modules