import React from "react";
import video from "../../assets/hero_video.mp4";
import "./hero.css";
import TeslaNavBar from "../navbar/navbar";
import { Box, Button, Container, Typography } from "@mui/material";
import { Colors } from "../../theme";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <video src={"https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Test_Drive-NA-Desktop.mp4"} autoPlay loop muted />

        <Box
          sx={{
            position: "absolute",
            top: "0",
            width: "100%",
            mt: "100px",
            display: "flex",
            justifyContent: "center",

            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h2" color="#fff" fontWeight={"bold"}>
            Experience Tesla
          </Typography>
          <Typography caption="subtilte1" color="#fff" fontSize="19px">
            Schedule a Demo Drive Today
          </Typography>
          <Button
            variant="outlined"
            color="white"
            disableElevation
            
            sx={{
              marginLeft: "16px",
              fontWeight: "bolder",
              px: "100px",
              py: "5px",
              fontSize: "14px",
              mt:'350px',
              "&:hover": {
                background: "white",
                color: "#000",
              },
            }}
          >
            Demo Drive
          </Button>
        </Box>
      </div>
    </>
  );
};

export default Hero;
