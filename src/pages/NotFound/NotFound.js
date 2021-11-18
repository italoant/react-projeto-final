import React from 'react';
import { useTheme } from '../../context/Theme';
import { Container } from './Style'
import Gif from './img/error.gif';

function NotFound() {

  const { themePage } = useTheme();

  return(
      <Container theme={themePage}>
          <div className="erro">
            <h1>ERROR 404</h1>
            <h3> NotFound </h3>
          </div>
          <div className="image">
            <img src={Gif} />
          </div>
      </Container>
  );
}

export default NotFound;