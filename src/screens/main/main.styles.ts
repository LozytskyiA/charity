import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const MainStyles = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `,
  Title: styled.img`
    padding-top: 142px;
    align-self: center;
  `,
  LeftBottomImage: styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
  `,
  RightBottomImage: styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
  `,
  Bird: styled.img`
    position: absolute;
    right: 57px;
    bottom: 134px;
  `,
  RightLine: styled.img`
    position: absolute;
    right: 0;
    bottom: 221.43px;
  `,
  BottomLine: styled.img`
    position: absolute;
    bottom: 0;
    right: 565.4px;
  `,
  InLoveWeTrust: styled.img`
    position: absolute;
    bottom: 161.1px;
    right: 382px;
  `,
  AboutUsWrapper: styled.section`
    background-color: ${COLORS.blue};
    height: 100vh;
    position: relative;
  `,
  TopLine: styled.img`
    position: absolute;
    top: 0;
    right: 728px;
  `,
};
