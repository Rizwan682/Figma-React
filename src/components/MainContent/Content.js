// import React, { useRef } from "react";
// import { Carousel, Button } from "antd";
// import { LeftOutlined, RightOutlined } from "@ant-design/icons"; // Importing icons for arrows
// import styled from "styled-components";
// import bg from "../../assets/svgs/bg.png"; // Importing the image
// // import SectionTwo from "./ContentSecond";


// // <style>
// //   @import
// //   url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap')
// // </style>;

// const CarouselHero = () => {
//   const carouselRef = useRef(null);

//   const handleNext = () => {
//     carouselRef.current.next();
//   };

//   const handlePrev = () => {
//     carouselRef.current.prev();
//   };

//   const StyledSlide = styled.div`
//     position: relative;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     // height: 100vh; /* Adjust height for vertical centering */
//     background: #364d79;
//     color: #fff;
//     text-align: center;
//   `;

//   const SlideImage = styled.img`
//     width: 100%;
//     height: auto;
//     object-fit: cover;
//   `;


//   const tabletBreakpoint = '768px'; // Breakpoint for tablets
//   const mobileBreakpoint = '576px'; // Breakpoint for mobile devices

//   // Styled components with added breakpoints
//   const ContentOverlay = styled.div`
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     text-align: center;
//     font-family: "Jost";

//     /* Responsive adjustments */
//     @media (max-width: ${tabletBreakpoint}) {
//       font-size: 14px;
//     }
//     @media (max-width: ${mobileBreakpoint}) {
//       font-size: 10px;

//       text-align: center; /* Center text on smaller screens */
//     }
//   `;

//   const H1 = styled.h1`
//     width: 100%; /* Adjusted for responsiveness */
//     max-width: 307px; /* Limit width for larger screens */
//     opacity: 0px;
//     font-family: "Jost";
//     font-size: 50px;
//     font-weight: 600;
//     line-height: 72.25px;
//     text-align: left;
//     color: #ffffff;

//     /* Responsive adjustments */
//     @media (max-width: ${tabletBreakpoint}) {
//       font-size: 36px;
//       max-width: none; /* Allow text to occupy full width */
//       line-height: 50.25px;
//       margin:18px
//     }

//     @media (max-width: ${mobileBreakpoint}) {
//       font-size: 32px;
//       line-height: 50.25px;
//       text-align: center; /* Center text on smaller screens */
//     }
//   `;

//   const Paragraph = styled.p`
//     color: white;
//     font-size: 18px;
//     margin-bottom: 20px;
//     font-family: "Jost";

//     /* Responsive adjustments */
//     @media (max-width: ${tabletBreakpoint}) {
//       font-size: 16px;
//     }

//     @media (max-width: ${mobileBreakpoint}) {
//       font-size: 14px;
//       text-align: center; /* Center text on smaller screens */
//     }
//   `;

//   const LimitedEditionButton = styled(Button)`
//     background-color: #f5c34b;
//     border-color: #f5c34b;
//     border-radius: 10px;
//     font-size: 16px;
//     font-family: "Jost";

//     /* Responsive adjustments */
//     @media (max-width: ${tabletBreakpoint}) {
//       font-size: 14px;
//     }

//     @media (max-width: ${mobileBreakpoint}) {
//       font-size: 12px;
//       padding: 8px 16px; /* Adjust padding for smaller screens */
//     }
//   `;

//   const LimitedEditionDiv = styled.div`
//     width: 114px;
//     height: 30px;
//     background-color: #cecbe2;
//     display: flex;
//     justify-content: center; /* Center horizontally */
//     align-items: center; /* Center vertically */
//     padding: 4px, 14px, 4px, 14px;
//     border-radius: 6px;
//   `;

//   return (
//     <div style={{ position: "relative" }}>
//       <Carousel ref={carouselRef} dots={false}>
//         <StyledSlide>
//           <SlideImage src={bg} alt="Slide 1" />
//         </StyledSlide>
//         <StyledSlide>
//           <SlideImage src={bg} alt="Slide 2" />
//         </StyledSlide>
//         <StyledSlide>
//           <SlideImage src={bg} alt="Slide 3" />
//         </StyledSlide>
//         <StyledSlide>
//           <SlideImage src={bg} alt="Slide 4" />
//         </StyledSlide>
//       </Carousel>
//       <ContentOverlay>
//         <LimitedEditionDiv>Limited Edition</LimitedEditionDiv>
//         <H1>Modern {<br />} Dining Chair</H1>
//         <Paragraph>Discover our new items. Up to 25% Off!</Paragraph>
//         <LimitedEditionButton>Shop Now</LimitedEditionButton>
//       </ContentOverlay>
//       <Button
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "10px",
//           transform: "translateY(-50%)",
//         }}
//         shape="circle"
//         icon={<LeftOutlined />}
//         onClick={handlePrev}
//       />
//       <Button
//         style={{
//           position: "absolute",
//           top: "50%",
//           right: "10px",
//           transform: "translateY(-50%)",
//         }}
//         shape="circle"
//         icon={<RightOutlined />}
//         onClick={handleNext}
//       />

//     </div>
//   );
// };



// export default CarouselHero;


import React, { useRef } from "react";
import { Carousel, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons"; // Importing icons for arrows
import styled from "styled-components";
import bg from "../../assets/svgs/bg.png"; // Importing the image

const CarouselHero = () => {
  const carouselRef = useRef(null);

  const handleNext = () => {
    carouselRef.current.next();
  };

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  const StyledSlide = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #364d79;
    color: #fff;
    text-align: center;
  `;

  const SlideImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
  `;

  const ContentOverlay = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-family: "Jost";
    font-size: 18px; // Default font size

    @media (max-width: 768px) {
      font-size: 16px; // Adjust font size for smaller screens
    }
    @media (max-width: 576px) {
      font-size: 14px; // Further adjust font size for extra small screens
    }
    @media (max-width: 500px) {
      font-size: 12px; // Adjust font size for screens narrower than 500px
    }
  `;

  const H1 = styled.h1`
    color: #ffffff;
    font-size: 30px; // Default font size
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: 24px; // Adjust font size for smaller screens
    }
    @media (max-width: 576px) {
      font-size: 20px; // Further adjust font size for extra small screens
    }
    @media (max-width: 500px) {
      font-size: 18px; // Adjust font size for screens narrower than 500px
    }
  `;

  const Paragraph = styled.p`
    color: white;
    font-size: 18px; // Default font size

    @media (max-width: 768px) {
      font-size: 16px; // Adjust font size for smaller screens
    }
    @media (max-width: 576px) {
      font-size: 14px; // Further adjust font size for extra small screens
    }
    @media (max-width: 500px) {
      font-size: 12px; // Adjust font size for screens narrower than 500px
    }
  `;

  const LimitedEditionButton = styled(Button)`
    background-color: #f5c34b;
    border-color: #f5c34b;
    border-radius: 10px;
    font-size: 16px; // Default font size

    @media (max-width: 768px) {
      font-size: 14px; // Adjust font size for smaller screens
    }
    @media (max-width: 576px) {
      font-size: 12px; // Further adjust font size for extra small screens
    }
    @media (max-width: 500px) {
      font-size: 10px; // Adjust font size for screens narrower than 500px
    }
  `;

  const LimitedEditionDiv = styled.div`
    width: 114px;
    height: 30px;
    background-color: #cecbe2;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 14px;
    border-radius: 6px;
    font-size: 14px; // Default font size

    @media (max-width: 768px) {
      font-size: 12px; // Adjust font size for smaller screens
    }
    @media (max-width: 576px) {
      font-size: 10px; // Further adjust font size for extra small screens
    }
    @media (max-width: 500px) {
      font-size: 8px; // Adjust font size for screens narrower than 500px
    }
  `;

  return (

    <div style={{ position: "relative" }}>
      <Carousel ref={carouselRef} dots={false}>
        <StyledSlide>
          <SlideImage src={bg} alt="Slide 1" />
        </StyledSlide>
        <StyledSlide>
          <SlideImage src={bg} alt="Slide 2" />
        </StyledSlide>
        <StyledSlide>
          <SlideImage src={bg} alt="Slide 3" />
        </StyledSlide>
        <StyledSlide>
          <SlideImage src={bg} alt="Slide 4" />
        </StyledSlide>
      </Carousel>
      <ContentOverlay>
        <LimitedEditionDiv>Limited Edition</LimitedEditionDiv>
        <H1>Modern Dining Chair</H1>
        <Paragraph>Discover our new items. Up to 25% Off!</Paragraph>
        <LimitedEditionButton>Shop Now</LimitedEditionButton>
      </ContentOverlay>
      <Button
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
        }}
        shape="circle"
        icon={<LeftOutlined />}
        onClick={handlePrev}
      />
      <Button
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
        }}
        shape="circle"
        icon={<RightOutlined />}
        onClick={handleNext}
      />
    </div>
  );
};

export default CarouselHero;
