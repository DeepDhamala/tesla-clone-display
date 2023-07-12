import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
// import { lighten } from "polished";
// import { Colors } from "../../styles/theme";
import { useUIContext } from "../context/ui/context";

export const DrawerCloseButton = styled(IconButton)(() => ({
  position: "absolute",
  top: "3vh",
  right: "5.2vw",
  zIndex: 1999,
}));

const AppDrawer = () => {
  const { drawerOpen, setDrawerOpen } = useUIContext();

  const navItem = [
    "Model S",
    "Model 3",
    "Model X",
    "Model Y",
    "Solar Roof",
    "Solar Panels",
    "Powerwall",
    "Existing Inventory",
    "Used Inventory",
    "Trade-In",
    "Demo Drive",
    "Insurance",
    "Fleet",
    "Commercial Energy",
    "Utilities",
    "Charging",
    "Careers",
    "Find Us",
    "Events",
    "Support",
    "Investor Relations",
    "Shop",
    "Account",
  ];

  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon
            sx={{
              fontSize: "1.5rem",
            }}
          />
        </DrawerCloseButton>
      )}

      <Drawer
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        anchor={"right"}
      >
        <Box sx={{ minWidth: "43vw", py: "70px", px: "20px" }}>
          <List>
            {navItem.map((each) => (
              <ListItemButton
                m={0}
                p={0}
                sx={{ "&:hover": { borderRadius: "5px" } }}
              >
                <ListItemText m={0} p={0}>
                  <Typography color="GrayText" fontWeight="bolder" variant="">
                    {each}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default AppDrawer;
