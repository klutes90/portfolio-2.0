import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import SectionHeader from "../molecules/SectionHeader";

class About extends React.Component {
  render() {
    return (
      <Element name="about">
        <Wrapper>
          <SectionHeader number="1" top="About" bottom="Kyle Lutes" />
        </Wrapper>
      </Element>
    );
  }
}

const Wrapper = styled.section`
  background-color: #1c1c1c;
  border-top: 0.1rem solid #333;
  padding-bottom: calc(10rem + (15 - 10) * (100vw - 76.8rem)/ (110 - 76.8));
  padding-top: calc(10rem + (15 - 10) * (100vw - 76.8rem)/ (110 - 76.8));
`;

export default About;