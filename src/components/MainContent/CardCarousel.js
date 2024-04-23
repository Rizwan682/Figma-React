



import React, { useRef } from 'react';
import { Card, Carousel, Button } from 'antd';
import { Grid } from 'antd';
import styled from 'styled-components';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

import CarouselAssets from "../MainContent/CardCarouselAssets";

const { useBreakpoint } = Grid;

const BasicDemo = ({ data }) => {
    const toggleSlides = useRef(null);
    const screens = useBreakpoint();


    const showSlides = () => {
        if (screens.xl) return 5;
        if (screens.lg) return 3;
        if (screens.md) return 2;
        if (screens.sm) return 1;
        if (screens.xs) return 1;
    }

    const navigateLeft = () => {
        toggleSlides.current.prev();
    }

    const navigateRight = () => {
        toggleSlides.current.next();
    }

    return (
        <CarouselWrapper>
            <StyledCarousel ref={toggleSlides} autoplay dots={false} slidesToShow={showSlides()}>
                {data.map((el) => (
                    <StyledCard
                        key={el.id}
                        hoverable
                        cover={<img alt="example" src={el.src} className='coverimg' />}
                    >
                        <CardContent>
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
            </StyledCarousel>
            <NavigationButton type="primary" shape="circle" icon={<LeftOutlined />} onClick={navigateLeft} />
            <NavigationButton type="primary" shape="circle" icon={<RightOutlined />} onClick={navigateRight} />
        </CarouselWrapper>
    );
};

const CarouselWrapper = styled.div`
width:100%;
height:100%;
    position: relative;
`;

const StyledCarousel = styled(Carousel)`
    margin-bottom: 20px;
`;

const StyledCard = styled(Card)`
    width: 100% !important;
    overflow: hidden;
    // margin-right: 10px;
    .coverimg{
        width:100%;
    }
`;

const CardContent = styled.div`
    // padding: 10px;
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
    gap: 8px;
`;

const SaledPrice = styled.s`
    color: #999;
`;

const NavigationButton = styled(Button)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;

    &:first-child {
        left: 0;
    }

    &:last-child {
        right: 0;
    }
`;

export default BasicDemo;
