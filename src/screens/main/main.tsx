import React from "react";
import Bird from "../../assets/images/bird.png";
import BottomLine from "../../assets/images/icons/bottom_line.svg";
import Title from "../../assets/images/icons/h1.svg";
import InLoveWeTrust from "../../assets/images/icons/in_love_we_trust.svg";
import RightLine from "../../assets/images/icons/right_line.svg";
import TopLine from "../../assets/images/icons/top_line.svg";
import RightBottomImage from "../../assets/images/right_bottom_bg.png";
import LeftBottomImage from "../../assets/images/subtract.png";

import { Header } from "../../components/header";
import { MainStyles as Styled } from "./main.styles";

export const Main = () => {
  return (
    <>
      <Styled.Wrapper>
        <Header />
        <Styled.Title src={Title} />
        <Styled.LeftBottomImage src={LeftBottomImage} />
        <Styled.RightBottomImage src={RightBottomImage} />
        <Styled.RightLine src={RightLine} />
        <Styled.InLoveWeTrust src={InLoveWeTrust} />
        <Styled.BottomLine src={BottomLine} />
        <Styled.Bird src={Bird} />
      </Styled.Wrapper>
      <Styled.AboutUsWrapper>
        <Styled.TopLine src={TopLine} />
      </Styled.AboutUsWrapper>
    </>
  );
};
