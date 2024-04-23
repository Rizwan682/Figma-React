import React from "react";
import styled from "styled-components";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Icons = () => {
  return (
    <StyledIcons>
      <FaFacebookSquare />
      <FaTwitter />
      <FaInstagram />
      <FaLinkedin />
    </StyledIcons>
  );
};

export default Icons;

const StyledIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5vw;
  svg {
    height: 10px;
    width: 10px; /* Adjust size as needed */
  }
  a {
    text-decoration: none;
    color: #000;
  }
`;
