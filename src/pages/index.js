import React from 'react';
import { graphql, navigate } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout/Layout';
import Banner from '../components/Banner/Banner';
import Contact from '../components/Contact/Contact';

const IndexPage = ({ data }) => {
    return (
        <Layout>
            <Helmet>
                <title>The Greatest Of Gatsby</title>
            </Helmet>

            <Banner
                main = 'Work, your way.'
                description = 'Accord is a globar recruitment partnership delivering for clients and candidates across all industries and specialisms.'
                image = { data.bannerImage.childImageSharp.fluid }
                imageAlt = 'Accord Partnership' 
                onButtonClick = { () => navigate('/partner/') } 
                buttonText = 'Partner with us' />

            <Contact
                main = 'Partner with us'
                description = 'We provide you with the infrastructure and community so that you can rapidly build your own business.' />
        </Layout>
    )
};

export default IndexPage;

export const query = graphql`
    query {
        bannerImage: file(relativePath: { eq: "banner.png" }) {
            childImageSharp {
                fluid(maxWidth: 940) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
