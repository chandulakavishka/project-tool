import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';


const images = [
  'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000',
  'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT62LJXitTCIjFR8iL98nMo9tbIEGj4x79z2ygqslzTcA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDNl8dFfnRlsyADl5ARGMlDcrWX7pwxM1zbekdveYM&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4qTg6fFDyOZqICjlmXpRpHZvBH-ugax9FwjYYfWuJ&s'
];

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      height={180}
      sx={{
        width: '96%',
        boxShadow:3,
        backgroundColor: '#163a78',
        borderRadius:2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {images.map((image, i) => (
        <Box
          key={image}
          sx={{
            position: 'absolute',
            top: 0,
            left: index === i ? 0 : '100%',
            transition: 'right 0.5s ease-out-in',
            width: '100%',
            height: '100%',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            
          }}
        />
      ))}
    </Box>
  );
};

export default Slideshow;