import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout/Layout';

const NotFound = () => (
    <Layout>
        <Helmet>
            <title>404 | The Greatest Of Gatsby</title>
        </Helmet>
    </Layout>
);

export default NotFound;
