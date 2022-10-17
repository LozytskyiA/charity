import { graphql, useStaticQuery } from 'gatsby';

const headerImages = graphql`
	query {
		burger: file(relativePath: { eq: "burgerMenu.png" }) {
			base
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		logoPink: file(relativePath: { eq: "logoPink.png" }) {
			base
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		girl: file(relativePath: { eq: "slider/girl.png" }) {
			base
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		tip01: file(relativePath: { eq: "slider/tip01.jpg" }) {
			base
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		tip05: file(relativePath: { eq: "slider/tip05.jpg" }) {
			base
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		tip10: file(relativePath: { eq: "slider/tip10.jpg" }) {
			base
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		tip25: file(relativePath: { eq: "slider/tip25.jpg" }) {
			base
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		tip38: file(relativePath: { eq: "slider/tip38.jpg" }) {
			base
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

export const useHeader = (): any => {
	const headerImgs = useStaticQuery(headerImages);
	const sliderImgs = [
		headerImgs.girl,
		headerImgs.tip01,
		headerImgs.tip10,
		headerImgs.tip38,
		headerImgs.tip25,
		headerImgs.tip05,
	];
	return sliderImgs;
};
