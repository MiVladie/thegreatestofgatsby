import React from 'react';
import { Helmet } from 'react-helmet';
import { navigate } from 'gatsby';

import Layout from '../components/Layout/Layout';
import Banner from '../components/Banner/Banner';

const NotFound = ({ data }) => (
    <Layout>
        <Helmet>
            <title>404 | The Greatest Of Gatsby</title>
        </Helmet>

        <Banner
            main = '404! Page not found'
            description = 'The page you are looking for does not exist or an other error occured! Go back, or head over to Home page to choose a new direction.'
            image = { data.bannerImage.childImageSharp.fluid }
            imageAlt = 'Accord Partnership'
            onButtonClick = { () => navigate('/') }
            buttonText = 'Home Page'  />
    </Layout>
);

export default NotFound;

export const query = graphql`
    query {
        bannerImage: file(relativePath: { eq: "partnership.png" }) {
            childImageSharp {
                fluid(maxWidth: 940) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

