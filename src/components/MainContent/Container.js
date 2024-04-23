import React from 'react';
import styled from 'styled-components';
import { Card, Button } from 'antd';
import bg1 from "../../assets/svgs/bg1.svg";
import bg2 from "../../assets/svgs/bg2.svg";

// Styled components
const ContainerWrapper = styled.div`
    width: 100%;
    position: relative;
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-position: center;
    min-height: 300px;

    @media (max-width: 768px) {
        min-height: 200px;
    }
`;

const StyledCard = styled(Card)`
    width: 50%;
    position: absolute;
    top: 20px;
    left: 20px;
    background-color: transparent;
    border: none;
    z-index: 1;

    @media (max-width: 768px) {
        width: 80%;
        top: 10px;
        left: 10px;
    }
`;

const StyledSpan = styled.span`
    color: #0053F6;
    font-size: 15px;
`;

const StyledHeading = styled.h2`
    font-family: Jost;
    font-size: 30px;
    font-weight: 500;
    line-height: 43.35px;
    text-align: left;
    color: #041E42;

    @media (max-width: 576px) { /* iPhone SE and similar */
        font-size: 20px;
        line-height: 28px;
    }

    @media (max-width: 414px) { /* iPhone XR and similar */
        font-size: 18px;
        line-height: 26px;
    }

    @media (min-width: 577px) and (max-width: 778px) { /* Responsive range */
        font-size: 24px;
        line-height: 34px;
    }
`;

const StyledButtonWrapper = styled.div`
    margin-top: 10px;
    position: relative;
`;

const StyledButton = styled(Button)`
    font-size: 15px;
    color: #041E42;
    border: none;
    background-color: transparent;
    padding: 0; /* Remove default padding */
    width: auto;

    &:hover {
        background-color: transparent;
        color: #041E42;
    }
`;

const Underline = styled.div`
    width: 32px;
    height: 2px;
    background-color: #041E42;
    margin-top: 5px; /* Adjust margin as needed */
`;

const Container = ({ section }) => { // Accept section prop
    // Determine which background image to use based on the section prop
    const bgImage = section === 'section1' ? bg1 : bg2;

    return (
        <ContainerWrapper bgImage={bgImage}>
            <StyledCard
                cover={
                    <div style={{ padding: '20px' }}>
                        <StyledSpan>Starting from $899</StyledSpan>
                        <StyledHeading>Advanced All-In-One Virtual <br /> Reality Headset</StyledHeading>
                        <StyledButtonWrapper>
                            <StyledButton type="">Shop Now</StyledButton>
                            <Underline />
                        </StyledButtonWrapper>
                    </div>
                }
            />
        </ContainerWrapper>
    );
};

export default Container;
