import {
  css, FlattenInterpolation, ThemedStyledProps
} from 'styled-components';

export type CSS<T = {}> = FlattenInterpolation<ThemedStyledProps<T, any>>;

export const SIZE = {
	xsMobile: "321px",
	mobile: "600px",
	tablet: "768px",
	smallLandscape: "940px",
	preLandscape: "1179px",
	landscape: "1180px",
	landscapeWreck: "1350px",
	desktop: "1500px",
	desktop1600: "1600px",
	hugeResolution: "2050px",
};

export const SIZE_SWIPER = {
	xsMobile: 321,
	mobile: 600,
	tablet: 768,
	smallLandscape: 940,
	preLandscape: 1179,
	landscape: 1180,
	landscapeWreck: 1350,
	desktop: 1500,
	desktop1600: 1600,
};

export const Media = {
	xsMobile: (payload: CSS) =>
		css`
			@media (max-width: ${SIZE.xsMobile}) {
				${payload};
			}
		`,
	mobile: (payload: CSS) =>
		css`
			@media (max-width: ${SIZE.mobile}) {
				${payload};
			}
		`,
	tablet: (payload: CSS) =>
		css`
			@media (max-width: ${SIZE.tablet}) {
				${payload};
			}
		`,
	landscape: (payload: CSS) =>
		css`
			@media (max-width: ${SIZE.landscape}) {
				${payload};
			}
		`,
	landscapeWreck: (payload: CSS) =>
		css`
			@media (max-width: ${SIZE.landscapeWreck}) {
				${payload};
			}
		`,
	iPadPro: (payload: CSS) => css`
		@media (max-width: 1024px) {
			${payload};
		}
	`,
	smallLandscape: (payload: CSS) =>
		css`
			@media (max-width: ${SIZE.smallLandscape}) {
				${payload};
			}
		`,

	desktop: (payload: CSS) =>
		css`
			@media (max-width: ${SIZE.desktop}) {
				${payload};
			}
		`,

	desktop1600: (payload: CSS) =>
		css`
			@media (max-width: ${SIZE.desktop1600}) {
				${payload};
			}
		`,

	desktop1920: (payload: CSS) =>
		css`
			@media (min-width: ${SIZE.desktop1600}) {
				${payload};
			}
		`,
	hugeResolution: (payload: CSS) =>
		css`
			@media (min-width: ${SIZE.hugeResolution}) {
				${payload};
			}
		`,
};
