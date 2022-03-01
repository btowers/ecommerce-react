import {
  Button,
  Card,
  CardMedia,
  Grid,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Item = ({ id, title, price, pictureUrl }) => {
  let media = {
    paddingTop: "56.25%",
  };
  return (
    <>
      <Grid item key={id} xs={12} sm={6} md={4}>
        <Link style={{ textDecoration: "none" }} to={`/item/${id}`} key={id}>
          <Card
            elevation={0}
            variant="outlined"
            sx={{
              border: "1px solid #E0E0E0",
              height: "100%",
            }}
          >
            <CardMedia
              component="img"
              className={media}
              image={pictureUrl}
              alt={title}
            />
            <CardContent>
              <Typography noWrap gutterBottom variant="h5">
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
