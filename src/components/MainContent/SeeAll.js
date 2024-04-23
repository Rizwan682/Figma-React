import React from 'react';
import { Button, Row, Col } from 'antd';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin-top: 10px;
`;

const StyledHeading = styled.h2`
  margin: 0;
  margin-right: 10px;
  text-align: center;
  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-top: 10px;
  }
`;

const StyledButton = styled(Button)`
  background: none;
  border: none;
  padding: 0;
  color: black;
  cursor: pointer;
  margin-right: 20px;
  text-decoration: ${props => props.underline ? 'underline' : 'none'};
  border-bottom: ${props => props.underline ? '2px solid gray' : 'none'};
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    margin-right: 10px;
  }
`;

const SeeAllHeader = () => {
  return (
    <StyledContainer>
      <Row justify="space-between" align="middle">
        <Col xs={24} sm={18}>
          <StyledHeading>Save on TV, video, & home audio</StyledHeading>
        </Col>
        <Col xs={24} sm={6}>
          <ButtonContainer>
            <StyledButton type="text" underline={true}>See All</StyledButton>
          </ButtonContainer>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default SeeAllHeader;
