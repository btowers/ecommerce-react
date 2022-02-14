import React from "react";
import { Grid, CircularProgress } from "@mui/material";

function Loading() {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <CircularProgress />
      </Grid>
    </>
  );
}

export default Loading;
