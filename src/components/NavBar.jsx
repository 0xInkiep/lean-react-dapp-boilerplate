import React from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const NavBar = () => <Navigation>
  <Grid fluid>
    <Row middle="xs">
      <Col xs={12} md={6}>
        <Row>
          <Col>
            <CustomNavLink to="/">
              Home
            </CustomNavLink>
          </Col>
          <Col>
            <CustomNavLink to="/credits">
              Support this project
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
        </Row>
      </Col>
      <Col xs={12} md={6}>
        <Row end="md" start="xs" middle="xs">
          <Col xs={12} md={6}>
            <CustomLink href="https://twitter.com/0xInkiep">
              Made with 🖤 by 0xInkiep
            </CustomLink>
          </Col>
          <Col xs={12} md={6}>
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

const linkStyles = css`
  text-decoration: none;
  padding: 15px;
  height: 2em;
  line-height: 45px;
  color: #fff;

  &:hover {
    background-color: #36297A;
  }

  &.active {
    background-color: #36297A;
  }
`

const CustomLink = styled.a`
  ${linkStyles}
`;

const CustomNavLink = styled((props) => {
  return <NavLink
    className={({ isActive }) => isActive ? 'active' : undefined }
    {...props} />;
})`
  ${linkStyles}
`;
