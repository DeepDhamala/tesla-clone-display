import { Button } from "@mui/material";
import React from "react";

const OrderButton = () => {
  return (
    <>
      <Button
        variant="contained"
        color="gray"
        disableElevation
        sx={{
          // marginLeft: "16px",
          fontWeight: "bolder",
          px: "40px",
          py: "8px",
          fontSize: "14px",
          // mt: "350px",
          background: "gray",
          color: "#fff",
          minWidth:'250px'
        }}
      >
        Custom Order
      </Button>
    </>
  );
};

export default OrderButton;
