import React from "react";
import Carousel from "react-material-ui-carousel";
import { Container } from "@mui/material";

function ItemsCarousel(props) {
  var items = [
    {
      title: "Futbol",
      link: "https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/category/banner_categoria_-_deportes_-_F_tbol.jpg",
    },
    {
      title: "Running",
      link: "https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/category/banner_categoria_-_deportes_-_running_2.jpg",
    },
    {
      title: "Tenis",
      link: "https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/category/banner_categoria_-_deportes_-_Tenis.jpg",
    },
  ];

  return (
    <Carousel
      autoPlay={true}
      animation="slide"
      interval={3000}
      indicators={false}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item({ item }) {
  return (
    <Container
      elevation={0}
      sx={{
        p: 2,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <img height={200} src={item.link} alt={item.title} borderRadius={3} />
    </Container>
  );
}

export default ItemsCarousel;
