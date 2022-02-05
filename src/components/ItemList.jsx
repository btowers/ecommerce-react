import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {items.map((item) => (
            <Item
              pictureUrl={item.image}
              price={item.price}
              title={item.title}
              id={item.id}
              key={item.id}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ItemList;
