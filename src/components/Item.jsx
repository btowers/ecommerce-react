import {
  Card,
  CardMedia,
  Grid,
  Rating,
  CardContent,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, title, price, rating, pictureUrl }) => {
  const [shadow, setShadow] = useState(0);

  return (
    <>
      <Grid item key={id} xs={12} sm={6} md={4}>
        <Link style={{ textDecoration: 'none' }} to={`/item/${id}`} key={id}>
          <Card
            onMouseOver={() => setShadow(5)}
            onMouseOut={() => setShadow(0)}
            elevation={shadow}
            variant="outlined"
            sx={{
              boxShadow: shadow,
              border: '1px solid #E0E0E0',
              height: '100%',
            }}
          >
            <CardMedia
              height="300px"
              component="img"
              image={pictureUrl}
              alt={title}
            />
            <CardContent>
              <Typography noWrap gutterBottom variant="h5">
                {title}
              </Typography>
              <Rating name="size-small" value={rating.rate} size="small" />
              <Typography>${price}</Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
    </>
  );
};

export default Item;
