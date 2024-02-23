import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

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
        backgroundColor: '#000',
        borderRadius:2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Splide options={{
            perPage:1,
            arrows:true,
            focus:"center",
            pagination:true,
            gap:"4rem",
          }}>
            {images.map((images,index) => {
              return (
                <SplideSlide key={index}>
                  <Box>
                    <img src={images} style={{objectFit:'cover',width:'100%'}} alt=''/>
                  </Box>
                </SplideSlide>
              )
            })};
          </Splide>
    </Box>
  );
};

export default Slideshow;