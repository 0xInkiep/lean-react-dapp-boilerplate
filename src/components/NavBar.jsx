import React from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const NavBar = () => <Navigation>
  <Grid fluid>
    <Row>
      <Col xs={6} middle="xs">
        <Row>
          <Col>
            <CustomNavLink to="/">
              Home
            </CustomNavLink>
          </Col>
          <Col>
            <CustomNavLink to="/credits">
              Donate
            </CustomNavLink>
          </Col>
          <Col>
            <CustomLink target="_blank" href="https://github.com/0xInkiep/lean-react-dapp-boilerplate">
              GitHub
            </CustomLink>
          </Col>
          <Col>
            <CustomLink target="_blank" href="https://github.com/0xInkiep/lean-react-dapp-boilerplate/generate">
              Use this template
            </CustomLink>
          </Col>
          <Col>
            <CustomLink href="https://twitter.com/0xInkiep">
              Made with 🖤 by 0xInkiep
            </CustomLink>
          </Col>
        </Row>
      </Col>
      <Col xs={6}>
        <Row end="xs">
          <Col>
            <ConnectButton />
          </Col>
        </Row>
      </Col>
    </Row>
  </Grid>
</Navigation>;

export default NavBar;

export const withNavBar = (Screen) => {
  return (props) => {
    return (
      <React.Fragment>
        <NavBar {...props} />
        <Screen {...props} />
      </React.Fragment>
    );
  };
};

const Navigation = styled.nav`
  padding: 1.25em 0;
  width: 100%;
`;

const CustomLink = styled.a`
  text-decoration: none;
  padding: 10px;
  color: #fff;

  &:hover {
    background-color: #36297A;
  }
`;

const CustomNavLink = styled((props) => {
  return <NavLink
    className={({ isActive }) => isActive ? 'active' : undefined }
    {...props} />;
})`
  text-decoration: none;
  padding: 10px;
  color: #fff;

  &:hover {
    background-color: #36297A;
  }

  &.active {
    background-color: #36297A;
  }
`;
