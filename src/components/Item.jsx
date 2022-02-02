//import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Item = ({ id, title, price, pictureUrl }) => {
  return (
    <>
      <Grid item key={id} xs={12} sm={6} md={4}>
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 200, height: 200 }}
            image={pictureUrl}
            alt={title}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography noWrap gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography>${price}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Ver Detalles</Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default Item;
