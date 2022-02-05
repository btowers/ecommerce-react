import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Item from "./Item";

const ItemList = ({ users }) => {
  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {users.map((user) => (
            <Item
              pictureUrl={user.image}
              price={user.price}
              title={user.title}
              id={user.id}
              key={user.id}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ItemList;
