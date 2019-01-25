import React from 'react';
import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>
      <List>
        <Playlist href="">
          <img
            src="https://consequenceofsound.files.wordpress.com/2011/08/m83-hurry-up-were-dreaming.jpg?quality=80&w=450"
            alt="M83"
          />
          <strong>Into the Future</strong>
          <p>Feel the music</p>
        </Playlist>
      </List>
    </Title>
  </Container>
);

export default Browse;
