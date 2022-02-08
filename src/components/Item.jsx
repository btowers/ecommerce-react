import {
  Button,
  Card,
  CardMedia,
  Grid,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Item = ({ id, title, price, pictureUrl }) => {
  return (
    <>
      <Grid item key={id} xs={12} sm={6} md={4}>
        <Link to={`/item/${id}`} key={id}>
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
        </Link>
      </Grid>
    </>
  );
};

export default Item;
