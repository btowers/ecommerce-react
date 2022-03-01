import React from "react";
import { Container, CircularProgress } from "@mui/material";

function Loading() {
  return (
    <>
      <Container
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <CircularProgress />
      </Container>
    </>
  );
}

export default Loading;
