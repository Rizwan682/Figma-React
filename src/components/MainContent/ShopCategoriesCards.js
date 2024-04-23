import React from 'react';
import { Card } from 'antd'; // Import Card from antd
import styled from 'styled-components';

import CardsAssets from "../MainContent/ShopCategoriesCardsAssets";

const ShopCategoriesCards = ({ data }) => {
    return (
        <CardWrapper>
            <FlexContainer>
                {CardsAssets.slice(0, 10).map((el, index) => (
                    <StyledCard key={index}>
                        <CardContent>
                            <img alt="example" src={el.src} style={{ width: "100%" }} />
                            <Brand>{el.brand}</Brand>
                            <Title>{el.title}</Title>
                            <Rating>
                                {[...Array(5)].map((_, index) => (
                                    <img key={index} src={el.ratingStar} alt="rating" />
                                ))}
                                <span>{el.reviews}</span>
                            </Rating>

                            <Price>
                                <p>{el.initialPrice}</p>
                                <SaledPrice>{el.saledPrice}</SaledPrice>
                            </Price>
                        </CardContent>
                    </StyledCard>
                ))}
            </FlexContainer>
        </CardWrapper>
    );
};

const CardWrapper = styled.div`
    width: 100%;
    padding: 0 20px; /* Add padding to the sides */
`;

const FlexContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
`;

const StyledCard = styled(Card)`
    width: 100%;
    text-align: center;
`;

const CardContent = styled.div`
    padding: 10px;
`;

const Brand = styled.p`
    margin: 0;
    font-weight: bold;
`;

const Title = styled.h3`
    margin: 5px 0;
`;

const Rating = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 5px;

    img {
        width: 20px;
    }

    span {
        font-size: 12px;
    }
`;

const Price = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;

const SaledPrice = styled.s`
    color: #999;
`;

export default ShopCategoriesCards;
