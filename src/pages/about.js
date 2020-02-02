import React from 'react';
import { Link } from 'gatsby';
import Button from '../styles/Button';
import { Layout } from '../components/Layout/Layout';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Button as={Link} to="/" width="20vw">
      Go back to the homepage
    </Button>
  </Layout> 
);

export default SecondPage;
