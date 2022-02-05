import {
  Card,
  Typography,
  CardContent,
  CardMedia,
  Rating,
  Button,
} from "@mui/material";

const ItemDetail = ({ title, price, rating, pictureUrl }) => {
  return (
    <>
      <Card
        className="m-3 p-3"
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "row",
          width: "100%",
          maxWidth: "800px",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 400, height: 400 }}
          image={pictureUrl}
          alt={title}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flexGrow: 1,
          }}
        >
          <div>
            <Typography variant="h4" component="h2">
              {title}
            </Typography>
            <Typography variant="h6">$ {price}</Typography>
            <Rating name="size-small" value={rating} size="medium" />
          </div>
          <div>
            <Button variant="contained">Comprar</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ItemDetail;
