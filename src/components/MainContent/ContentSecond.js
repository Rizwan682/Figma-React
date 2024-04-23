// import React from 'react';
// import styled from "styled-components";
// import { Col, Divider, Row } from 'antd';
// import images1 from "../../assets/svgs/images1.png"
// import images2 from "../../assets/svgs/images2.png"
// import images3 from "../../assets/svgs/images3.png"
// import images4 from "../../assets/svgs/images4.png"
// import images5 from "../../assets/svgs/images5.png"
// import images6 from "../../assets/svgs/images6.png"
// import images7 from "../../assets/svgs/images7.png"
// import images8 from "../../assets/svgs/images8.png"
// const SectionTwo = () => (
//     <Container>
//     {/* <Divider orientation="left"></Divider> */}
//     <Row justify="space-between">
//       <StyledCol span={2}>
//         <Image src={images1} alt="images1" />
//         <span>Electronics</span>
//       </StyledCol>
//       <StyledCol span={2}>
//         <Image src={images2} alt="images2" />
//         <span>Clothings</span>
//       </StyledCol>
//       <StyledCol span={2}>
//         <Image src={images3} alt="images3" />
//         <span>Health&amp; Beauty</span>
//       </StyledCol>
//       <StyledCol span={2}>
//         <Image src={images4} alt="images4" />
//         <span>Home&amp; Kitchen</span>
//       </StyledCol>
//       <StyledCol span={2}>
//         <Image src={images5} alt="images5" />
//         <span>Home&amp; Furniture</span>
//       </StyledCol>
//       <StyledCol span={2}>
//         <Image src={images6} alt="images6" />
//         <span>Grocery&amp;
//             Market</span>
//       </StyledCol>
//       <StyledCol span={2}>
//         <Image src={images7} alt="images7" />
//         <span>Toy&amp;
//             Video Games</span>
//       </StyledCol>
//       <StyledCol span={2}>
//         <Image src={images8} alt="images8" />
//         <span>Babies&amp;
//             Moms</span>
//       </StyledCol>
//     </Row>
//     </Container>
// );

// export default SectionTwo;

// const Container = styled.div`
//   overflow-x: hidden; /* Prevent horizontal scrolling */
// `;
// const StyledCol = styled(Col)`
//   display: inline-flex;
//   align-items: center;
//  font-weight:500;
//   font-size:10px;
//   line-height:22px;
// `;

// const Image = styled.img`

// `;


import React from 'react';
import styled from "styled-components";
import { Divider } from 'antd';
import images1 from "../../assets/svgs/images1.png"
import images2 from "../../assets/svgs/images2.png"
import images3 from "../../assets/svgs/images3.png"
import images4 from "../../assets/svgs/images4.png"
import images5 from "../../assets/svgs/images5.png"
import images6 from "../../assets/svgs/images6.png"
import images7 from "../../assets/svgs/images7.png"
import images8 from "../../assets/svgs/images8.png"

const SectionTwo = () => (
  <Container>
    <Divider orientation="left"></Divider>
    <Grid>
      <GridItem>
        <Image src={images1} alt="images1" />
        <span>Electronics</span>
      </GridItem>
      <GridItem>
        <Image src={images2} alt="images2" />
        <span>Clothings</span>
      </GridItem>
      <GridItem>
        <Image src={images3} alt="images3" />
        <span>Health&amp; Beauty</span>
      </GridItem>
      <GridItem>
        <Image src={images4} alt="images4" />
        <span>Home&amp; Kitchen</span>
      </GridItem>
      <GridItem>
        <Image src={images5} alt="images5" />
        <span>Home&amp; Furniture</span>
      </GridItem>
      <GridItem>
        <Image src={images6} alt="images6" />
        <span>Grocery&amp; Market</span>
      </GridItem>
      <GridItem>
        <Image src={images7} alt="images7" />
        <span>Toy&amp; Video Games</span>
      </GridItem>
      <GridItem>
        <Image src={images8} alt="images8" />
        <span>Babies&amp; Moms</span>
      </GridItem>
    </Grid>
  </Container>
);

export default SectionTwo;

const Container = styled.div`
  overflow-x: hidden; /* Prevent horizontal scrolling */
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap; /* Wrap grid items onto multiple lines */
  gap: 16px;
`;

const GridItem = styled.div`
  flex: 1 1 120px; /* Ensure grid items have a minimum width of 120px */
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
font-family:jost;
  font-size: 14px;
  line-height: 22px;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
`;