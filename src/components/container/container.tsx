import React from 'react';

import { ContainerStyled as Styled } from './container.styles';

type TProps = {
	children: JSX.Element;
};

export const Container = ({ children }: TProps) => {
	return <Styled.Wrapper>{children}</Styled.Wrapper>;
};
