import React from "react";

import ArrowIcon from "../../assets/images/icons/arrow-right.svg";
import Logo from "../../assets/images/icons/logo.svg";

import { HEADER_ROUTES } from "./header.constants";
import { HeaderStyles as Styled } from "./header.styles";

export const Header = () => {
  return (
    <Styled.Wrapper>
      <Styled.Logo src={Logo} alt="Logo" />
      <Styled.NavWrapper>
        {HEADER_ROUTES.map((route) => (
          <Styled.NavLink key={route}>{route}</Styled.NavLink>
        ))}
      </Styled.NavWrapper>
      <Styled.DonateWrapper>
        <Styled.DonateBtnText>DONATE</Styled.DonateBtnText>
        <Styled.DonateBtnIcon src={ArrowIcon} />
      </Styled.DonateWrapper>
    </Styled.Wrapper>
  );
};
// <Styled.Girl>
//   <Styled.GirlImg fluid={fluid} alt={alt} />
// </Styled.Girl>

{
  /* <Link link={LINKS.homePage}>
              <Styled.ImgStyled src={logoPink} alt={HEADER_ALT.headerLogo} />
            </Link> */
}
