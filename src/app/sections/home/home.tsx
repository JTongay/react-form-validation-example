import { Typography } from '@material-ui/core';
import { ExampleForm } from 'app/components/example-form/example-form';
import * as React from 'react';
import './home.scss';

const Home: React.FC<any> = (props) => {
  return (
    <section className="home-section">
      <Typography variant="h1" color="primary">
        React Form Validation
      </Typography>
      <section className="example-form">
        <ExampleForm />
      </section>
    </section>
  );
};

export default Home;
