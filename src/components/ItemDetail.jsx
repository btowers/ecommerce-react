import { Card, Typography, CardContent, CardMedia } from "@mui/material";

const ItemDetail = ({ title, price, pictureUrl }) => {
  return (
    <>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
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
      </Card>
    </>
  );
};

export default ItemDetail;
