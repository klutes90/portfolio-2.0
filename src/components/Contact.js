import React from "react";
import styled from "styled-components";
import Waypoint from "react-waypoint";

import SectionHeader from "./SectionHeader";

class Contact extends React.Component {
  render() {
    return (
      <Waypoint onEnter={() => this.props.currentSection("contact")}>
        <Wrapper>
          <SectionHeader number="3" top="Contact" bottom="Me" />
        </Wrapper>
      </Waypoint>
    );
  }
}

const Wrapper = styled.section`
  background-color: #1c1c1c;
  border-top: 0.1rem solid #333;
  padding-bottom: calc(10rem + (15 - 10) * (100vw - 76.8rem)/ (110 - 76.8));
  padding-top: calc(10rem + (15 - 10) * (100vw - 76.8rem)/ (110 - 76.8));
`;

export default Contact;
