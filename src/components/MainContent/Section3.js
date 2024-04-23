// import React from 'react';
// import styled from "styled-components";
// import { Card, Col, Row } from 'antd';

// import images9 from "../../assets/svgs/images9.png";
// import images10 from "../../assets/svgs/images10.png";
// import images11 from "../../assets/svgs/images11.png";
// import images12 from "../../assets/svgs/images12.png";
// import images13 from "../../assets/svgs/images13.png";
// import images14 from "../../assets/svgs/images14.png";

// const CenteredContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-family: 'Jost', sans-serif;
// `;

// const ContentContainer = styled.div`
//   width: 100%;
//   max-width: 1200px;
//   padding: 20px;
// `;

// const CardSection = styled.div`
//   margin-top: 20px;
//   border: 1px solid #EAEAEA;
// `;

// const StyledRow = styled(Row)`
//   margin-left: -8px;
//   margin-right: -8px;
// `;

// const StyledCol = styled(Col)`
//   padding: 8px;
// `;

// const Cards = () => (
//   <CenteredContainer>
//     <ContentContainer>
//       <p>Major savings</p>
//       <StyledRow gutter={[16, 16]}>
//         <StyledCol xs={24} sm={12} lg={8}>
//           <Card>
//             <img src={images9} alt='images9' />
//           </Card>
//           <span>Up to 40% off fashion</span>
//         </StyledCol>
//         <StyledCol xs={24} sm={12} lg={8}>
//           <Card title="">
//             <img src={images10} alt='images10' />
//           </Card>
//           <span>Up to 25% off tech</span>
//         </StyledCol>
//         <StyledCol xs={24} sm={12} lg={8}>
//           <Card title="">
//             <img src={images11} alt='images11' />
//           </Card>
//           <span>Up to 75% off grocery</span>
//         </StyledCol>
//         <StyledCol xs={24} sm={12} lg={8}>
//           <Card title="">
//             <img src={images12} alt='images12' />
//           </Card>
//           <span>Up to 30% off home</span>
//         </StyledCol>
//         <StyledCol xs={24} sm={12} lg={8}>
//           <Card title="">
//             <img src={images13} alt='images13' />
//           </Card>
//           <span>Up to 15% off sports</span>
//         </StyledCol>
//         <StyledCol xs={24} sm={12} lg={8}>
//           <Card title="">
//             <img src={images14} alt='images14' />
//           </Card>
//           <span>Up to 25% off electronics</span>
//         </StyledCol>
//       </StyledRow>
//     </ContentContainer>
//   </CenteredContainer>
// );

// export default Cards;


import React from 'react';
import styled from "styled-components";
import { Card } from 'antd';

import images9 from "../../assets/svgs/images9.png";
import images10 from "../../assets/svgs/images10.png";
import images11 from "../../assets/svgs/images11.png";
import images12 from "../../assets/svgs/images12.png";
import images13 from "../../assets/svgs/images13.png";
import images14 from "../../assets/svgs/images14.png";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Jost', sans-serif;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 20px;
`;

const CardSection = styled.div`
  margin-top: 20px;
  border: 1px solid #EAEAEA;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Span = styled.div`

`

const Cards = () => (
  <CenteredContainer>
    <ContentContainer>
      <p>Major savings</p>
      <CardSection>
        <GridContainer>
          <Card>
            <img src={images9} alt='images9' /><br />
            <span>Up to 40% off fashion</span>
          </Card>
          <Card>
            <img src={images10} alt='images10' /><br />
            <span>Up to 25% off tech</span>
          </Card>
          <Card>
            <img src={images11} alt='images11' /><br />
            <span>Up to 75% off grocery</span>
          </Card>
          <Card>
            <img src={images12} alt='images12' /><br />
            <span>Up to 30% off home</span>
          </Card>
          <Card>
            <img src={images13} alt='images13' /><br />
            <span>Up to 15% off sports</span>
          </Card>
          <Card>
            <img src={images14} alt='images14' /><br />
            <span>Up to 25% off electronics</span>
          </Card>
        </GridContainer>
      </CardSection>
    </ContentContainer>
  </CenteredContainer>
);

export default Cards;

