import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const AddressForm = ({ address, setAddress }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddress({ ...address, [name]: value });
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Datos de Envío
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={handleChange}
            id="firstName"
            name="firstName"
            label="Nombre"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={handleChange}
            id="lastName"
            name="lastName"
            label="Apellido"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={handleChange}
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={handleChange}
            id="direccion"
            name="direccion"
            label="Dirección"
            fullWidth
            autoComplete="address"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={handleChange}
            id="ciudad"
            name="ciudad"
            label="Ciudad"
            fullWidth
            autoComplete="city"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={handleChange}
            id="provincia"
            name="provincia"
            label="Provincia"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={handleChange}
            id="cp"
            name="cp"
            label="Código Postal"
            fullWidth
            autoComplete="zip"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={handleChange}
            id="pais"
            name="pais"
            label="País"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AddressForm;
