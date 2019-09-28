import { Typography } from '@material-ui/core';
import { ExampleForm } from 'app/components/example-form/example-form';
import * as React from 'react';
import { Form } from 'react-final-form';
import './home.scss';

const Home: React.FC<any> = (props) => {
  const onSubmit = async (values: any) => {
    const sleep = (ms: number) => new Promise((resolve: any) => setTimeout(resolve, ms));
    await sleep(300);
    window.alert(JSON.stringify(values));
  };

  return (
    <section className="home-section">
      <Typography variant="h1" color="primary">
        React Form Validation
      </Typography>
      <section className="example-form">
        <Form onSubmit={onSubmit} render={ExampleForm} />
      </section>
    </section>
  );
};

export default Home;
