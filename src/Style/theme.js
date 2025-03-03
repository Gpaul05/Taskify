import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: { fontWeight: 900 },  // Extra Bold
    h2: { fontWeight: 800 },  
    h3: { fontWeight: 700 },  
    h4: { fontWeight: 600 },  
    h5: { fontWeight: 500 },  
    h6: { fontWeight: 400 },  // Normal
    body1: { fontWeight: 300 }, // Light
    body2: { fontWeight: 200 }, // Extra Light
    subtitle1: { fontWeight: 100 }, // Thin
    italic: { fontStyle: "italic", fontWeight: 400 }, // Italic
  },
  });

export default theme;
