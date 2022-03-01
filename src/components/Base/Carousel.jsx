import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Container } from '@mui/material';

function ItemsCarousel(props) {
  var items = [
    {
      title: 'Futbol',
      link: '/assets/futbol.jpeg',
    },
    {
      title: 'Running',
      link: '/assets/running.jpeg',
    },
    {
      title: 'Tenis',
      link: '/assets/tenis.jpeg',
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
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <img height={200} src={item.link} alt={item.title} />
    </Container>
  );
}

export default ItemsCarousel;
