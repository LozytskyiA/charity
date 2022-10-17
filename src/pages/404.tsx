import React from 'react';

import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { SEO_PAGES } from '../constants/texts';

const NotFoundPage = () => {
	return (
		<Layout>
			<SEO title={SEO_PAGES.error.title} />
		</Layout>
	);
};

export default NotFoundPage;
