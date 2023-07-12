import { Box, Card, CardMedia } from '@mui/material';
import React from 'react';
import TeslaNavBar from '../navbar/navbar';
import Detail from '../CarDetail/Detail';

const Each = ({ model, image, d1, d2 }) => {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <Card
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        <CardMedia
          component="img"
          image={image}
          title={model}
          sx={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <TeslaNavBar dark={true}/>
          <Box 
          sx={{
            position: "absolute",
            top: "0",
            width: "100%",
            mt: "60px",
            display: "flex",
            justifyContent: "center",

            flexDirection: "column",
            alignItems: "center",
          }}
          >
          <Detail name={model} detail1={d1} detail2={d2} />

          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default Each;
