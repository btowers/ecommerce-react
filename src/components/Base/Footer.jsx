import { Box } from "@mui/material";

function Footer() {
  return (
    <footer
      style={{
        marginTop: 12,
        color: "gray",
        bottom: 0,
        backgroundColor: "#0182CF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        Hola
      </Box>
    </footer>
  );
}

export default Footer;
