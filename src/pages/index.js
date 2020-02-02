import React from 'react';
import { Link } from 'gatsby';
import { H1, Text } from '../styles/Text';
import Button from '../styles/Button';
import InlineLink from '../styles/InlineLink';
import { Layout } from '../components/Layout/Layout';

const IndexPage = () => (
  <Layout>
    <Text>Hi, my name is</Text>
    <H1 isBig isHighlight>Paweł Niedźwiecki</H1>
    <Text heading>Front-End Developer and UX Designer</Text>
    <Button as={Link} to="about">
      Say Hello
    </Button>
    <InlineLink as={Link} to="about">Click here!</InlineLink>
  </Layout>
);

export default IndexPage;
