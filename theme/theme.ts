import {createTheme} from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  typography: {
    h3: {
      fontSize: "1.2rem",
      "@media (max-width:600px)": {
        fontSize: "0.8rem",
      },
    },
    h4: {
      fontSize: "1.4rem",
      "@media (max-width:600px)": {
        fontSize: "1.1rem",
      },
    },
  },
  palette: {
    mode: "dark",
    background: {
      default: "#303030",
      paper: "#424242",
    },
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

export default theme;
