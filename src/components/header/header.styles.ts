import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const HeaderStyles = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 80px;
  `,
  Logo: styled.img`
    cursor: pointer;
  `,
  NavWrapper: styled.div`
    margin-right: -40px;
  `,
  NavLink: styled.a`
    cursor: pointer;
    font-size: 16px;
    color: ${COLORS.black};
    margin-right: 40px;
    &:hover {
      color: ${COLORS.blue};
    }
  `,
  DonateWrapper: styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: transform 0.5s ease;
    &:hover {
      transform: scale(1.2);
    }
  `,
  DonateBtnText: styled.p`
    font-weight: 600;
    color: ${COLORS.blue};
    margin-right: 10px;
  `,
  DonateBtnIcon: styled.img``,
};
