// 

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Drawer } from "antd";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import EnglishUSD from "./EnglishUSD";
import HelpCenter from "./HelpCenter";
import FindStore from "./FindStore";
import Icons from "./icons";
import logo from "../../assets/svgs/logo.png";

const AppHeader = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 745);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 745);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <MainContainer>
      <HeaderContent>
        {!isMobile && (
          <StyledHeader>
            <p>Free Express Shipping on orders $200!</p>
            <StyledNavOne>
              <EnglishUSD />
              <HelpCenter />
              <FindStore />
              <Icons />
            </StyledNavOne>
          </StyledHeader>
        )}
        <ParentHeader>
          <img src={logo} alt="Logo" />
          {isMobile && (
            <Button onClick={showDrawer}>
              <MenuOutlined style={{ fontSize: "24px" }} />
            </Button>
          )}
          {!isMobile && (
            <Container>
              <SearchInputWrapper>
                <SearchInput type="text" placeholder="Search" />
                <FilterSelect>
                  <option value="all">All</option>
                  <option value="category1">Category 1</option>
                  <option value="category2">Category 2</option>
                  <option value="category3">Category 3</option>
                </FilterSelect>
                <SearchButton>
                  <SearchOutlined />
                </SearchButton>
              </SearchInputWrapper>
            </Container>
          )}
          {!isMobile && (
            <HeaderSection>
              <AnchorStyle href="">
                <BsHeart /> Wishlist
              </AnchorStyle>
              <AnchorStyle href="">
                <FaRegUser /> My Account
              </AnchorStyle>{" "}
              <AnchorStyle href="">
                <IoCartOutline /> Cart
              </AnchorStyle>
            </HeaderSection>
          )}
        </ParentHeader>
      </HeaderContent>
      {isMobile && (
        <Drawer
          title=""
          
          placement="right"
          closable={true}
          onClose={onClose}
          visible={visible}
          width={300}
        >
          <img src={logo} alt="Logo" />
          <DrawerContent>
          
            <DrawerSection>
              <SearchInputWrapper>
                <SearchInput type="text" placeholder="Search" />
                <SearchButton>
                  <SearchOutlined />
                </SearchButton>
              </SearchInputWrapper>
              <FilterSelect>
                <option value="all">All</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </FilterSelect>
            </DrawerSection>
            <DrawerFooter>
              <AnchorStyle href="">
                <BsHeart /> Wishlist
              </AnchorStyle>
              <AnchorStyle href="">
                <FaRegUser /> My Account
              </AnchorStyle>{" "}
              <AnchorStyle href="">
                <IoCartOutline /> Cart
              </AnchorStyle>

            </DrawerFooter>
            <StyledNavOne direction="column">
              <EnglishUSD />
              <HelpCenter />
              <FindStore />
              <Icons />
            </StyledNavOne>
          </DrawerContent>
        </Drawer>
      )}
      <ColoredBorder>
        <ColoredHr color="#F5C34B" />
        <ColoredHr color="#6BD68D" />
        <ColoredHr color="#EC752F" />
        <ColoredHr color="#F5C34B" />
        <ColoredHr color="#6BD68D" />
      </ColoredBorder>
    </MainContainer>
  );
};

export default AppHeader;

const MainContainer = styled.div`
  padding: 0px;
  font-family: "Jost", sans-serif;
`;

const HeaderContent = styled.div`
  max-width: 1350px;
  margin: 0 auto;
`;

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const ParentHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  flex: 1;
  padding: 20px;
`;

const SearchInputWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  outline: none;
  border-radius: 40px;
  background: #f5f8fa;
  font-family: "Jost", sans-serif;
`;

const SearchButton = styled.button`
  background-color: #fff;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const FilterSelect = styled.select`
  padding: 8px;
  border: none;
  border-left: 1px solid #ccc;
  font-size: 14px;
  outline: none;
  font-family: "Jost", sans-serif;
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
`;

const AnchorStyle = styled.a`
  color: black;
  text-decoration: none;
  margin-right: 22px;
  font-family: "Jost", sans-serif;
`;

const ColoredBorder = styled.div`
  width: 100%;
`;

const ColoredHr = styled.hr`
  border: 1px solid ${(props) => props.color};
  margin: 0;
`;

const StyledNavOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3vw;
  flex-direction: ${(props) => props.direction || "row"};
`;

const DrawerContent = styled.div`

  overflow-x: hidden; // Prevent horizontal scrolling
`;

const DrawerSection = styled.div`
  margin-top: 20px;
`;

const DrawerFooter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Button = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 999;
`;
