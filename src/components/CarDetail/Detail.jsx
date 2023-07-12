import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ExploreButton from "../Buttons/ExploreButton";
import OrderButton from "../Buttons/OrderButton";

const Detail = ({ name, detail1, detail2 }) => {
  return (

    <>
    <Box display="flex" flexDirection="column" justifyContent="space-between" height="80vh">

    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>

      <Typography color="#171a20" variant="h3" fontWeight={"bold"} gutterBottom>
        {name}
      </Typography>
      <Typography color="black" variant="subtitle2" pb={0}>
        {detail1}
      </Typography>
      <Typography color="black" variant="subtitle2">
        {detail2}
      </Typography>
    </Box>

      <Box width="100%">
        <Grid container display="flex" spacing={{ xs: 1, md: 10 }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                md: "flex-start",
              },
            }}
          >
            <ExploreButton />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                md: "flex-start",
              },
            }}
            item
            xs={12}
            md={6}
          >
            <OrderButton />
          </Grid>
        </Grid>
      </Box>
      </Box>
    </>
  );
};

export default Detail;
