import React from 'react';
import { Button, Flex } from 'antd';
import styled from 'styled-components';

const StyledContainer = styled(Flex)`

  align-items: center; /* Center items vertically */
  justify-content: space-between; /* Align buttons to the right */
  @media screen and (max-width: 768px) {
    flex-direction: column; /* Change layout to column on smaller screens */
    align-items: stretch;
  }
`;

const StyledHeading = styled.h2`
  margin: 0;
  margin-right: 10px; /* Adding a margin to create a gap between heading and buttons */
  text-align: center; /* Center the heading text */
  @media screen and (max-width: 768px) {
    margin-bottom: 10px; /* Add margin bottom for smaller screens */
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row; /* Ensure buttons are displayed in a row */
  @media screen and (max-width: 768px) {
    flex-direction: row; /* Maintain horizontal layout on smaller screens */
    flex-wrap: wrap; /* Allow buttons to wrap to new line if needed */
    justify-content: center; /* Center the buttons horizontally */
  }
`;

const StyledButton = styled(Button)`
  background: none; /* Remove background */
  border: none; /* Remove border */
  padding: 0; /* Remove padding */
  color: black; /* Changing button text color to black */
  cursor: pointer; /* Show pointer on hover */
  margin-right: 20px; /* Increase the gap between buttons */
  text-decoration: ${props => props.underline ? 'underline' : 'none'}; /* Add underline if underline prop is true */
  border-bottom: ${props => props.underline ? '2px solid gray' : 'none'}; /* Add bottom border if underline prop is true */
  margin-bottom: 10px; /* Add space between buttons */
  @media screen and (max-width: 768px) {
    margin-right: 10px; /* Reduce margin between buttons on smaller screens */
  }
`;

const CardCarouselHeader = () => {
  return (
    <StyledContainer>
      <StyledHeading>Best Sellers</StyledHeading>
      <ButtonContainer>
        <StyledButton type="text" underline={true}>Top 20</StyledButton>
        <StyledButton type="text">Baby</StyledButton>
        <StyledButton type="text">Furniture</StyledButton>
        <StyledButton type="text">Electronic</StyledButton>
        <StyledButton type="text">All</StyledButton>
      </ButtonContainer>
    </StyledContainer>
  );
};

export default CardCarouselHeader;
