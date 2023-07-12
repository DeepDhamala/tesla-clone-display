import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  ThemeProvider,
  createTheme,
  Box,
  Container,
  Grid,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TeslaSvg from "../../assets/Tesla.svg";
import { Colors } from "../../theme";
import { useUIContext } from "../context/ui/context";

const theme = createTheme({
  palette: {
    white: {
      main: Colors.white,
    },
    gray: {
      main: Colors.light_gray,
    },
    black: {
      main: Colors.black,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          paddingInline: "8px",
          background: "transparent",
          fontWeight: "bolder",
          fontSize: "15px",
          textTransform: "none",
        },
        text: (props) => ({
          color: props.dark ? "#000" : "#fff", // Conditionally set button text color
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          flexGrow: 1,
          color: "#fff",
          fontWeight: "bolder",
          fontSize: "20px",
        },
      },
    },
  },
});

function TeslaNavBar({ dark }) {
  const svgStyles = {
    filter: dark
      ? "grayscale(0%) brightness(0%)"
      : "grayscale(100%) brightness(1000%)", // Conditionally set SVG styles
    ...(dark ? { filter: "grayscale(0%) brightness(0%)" } : {}), // Set white color when dark prop is not passed
  };

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const { setDrawerOpen, setShowSearchBox } = useUIContext();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="absolute" top="0">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src={TeslaSvg}
                  style={svgStyles}
                  alt="Tesla Logo"
                  height={"70px"}
                  width="150px"
                />
              </Grid>
              {!isSmallScreen ? (
                <Grid xs={8} sx={{ display: "flex", justifyContent: "center" }}>
                  <Button className="nav-button" color="inherit" dark={dark}>
                    Model S
                  </Button>
                  <Button className="nav-button" color="inherit" dark={dark}>
                    Model 3
                  </Button>
                  <Button className="nav-button" color="inherit" dark={dark}>
                    Model X
                  </Button>
                  <Button className="nav-button" color="inherit" dark={dark}>
                    Model Y
                  </Button>
                  <Button className="nav-button" color="inherit" dark={dark}>
                    Solar Roof
                  </Button>
                  <Button className="nav-button" color="inherit" dark={dark}>
                    Solar Panel
                  </Button>
                  <Button className="nav-button" color="inherit" dark={dark}>
                    Powerwall
                  </Button>
                </Grid>
              ) : (
                <Grid
                  item
                  xs={8}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                  IconButton
                  onClick={() => setDrawerOpen(true)}
                >
                  <IconButton 
                    color="inherit"
                    aria-label="menu"
                    sx={{py:'2px',
                      backgroundColor: "rgba(51, 51, 51, 0.4)",
                      borderRadius: "4px",
                      "&:hover": {
                        backgroundColor: "rgba(51, 51, 51, 0.4)",
                      },
                    }}
                  >
                    <Typography py={0} px={0.5} fontSize="1rem" variant="subtitle1">Menu</Typography>
                  </IconButton>
                </Grid>
              )}
              {!isSmallScreen && (
                <Grid xs={2}>
                  <Button className="nav-button" color="inherit" dark={dark}>
                    Shop
                  </Button>
                  <Button className="nav-button" color="inherit" dark={dark}>
                    Account
                  </Button>
                  <Button className="nav-button" color="inherit" dark={dark}>
                    Menu
                  </Button>
                </Grid>
              )}
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default TeslaNavBar;
