import styled, { css } from 'styled-components';

import { Media } from '../../styles/media';

export const ContainerStyled = {
	Wrapper: styled.div`
		display: flex;
		flex-direction: column;
		max-width: 1350px;
		margin: 0 auto;
		justify-content: space-between;
		${Media.hugeResolution(css`
			max-width: 1920px;
		`)}
		${Media.desktop1600(css`
			max-width: 1100px;
		`)}
		${Media.landscape(css`
			padding: 0 60px;
		`)} 
		${Media.tablet(css`
			padding: 0;
			margin: 0;
			align-items: center;
			text-align: center;
		`)}
	`,
};
