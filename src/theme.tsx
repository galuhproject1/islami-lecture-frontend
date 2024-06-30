import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#11142D", // semiblack
    },
    secondary: {
      main: "#FF4363", // redvelvet
    },
    error: {
      main: "#D32F2F",
    },
  },
  typography: {
    fontFamily: ["Mulish", "Inter", "sans-serif"].join(", "),
  },
});

export default theme;
