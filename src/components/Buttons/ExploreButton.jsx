import { Button } from "@mui/material";
import React from "react";

const ExploreButton = () => {
  return (
    <>
      <Button
        variant="contained"
        color="white"
        disableElevation
        sx={{
        //   marginLeft: "16px",
          fontWeight: "bolder",
          px: "40px",
          py: "8px",
          fontSize: "14px",
        //   mt: "350px",
          background: "white",
          color: "#000",
          minWidth:'250px'
        }}
      >
        Explore Inventory
      </Button>
    </>
  );
};

export default ExploreButton;
