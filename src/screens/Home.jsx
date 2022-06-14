import React from "react";
import { useSignMessage } from 'wagmi';

import { Grid, Row, Col } from 'react-flexbox-grid';

import StyledButton from "../components/StyledButton";
import pepeMeme from '../../assets/img/pepe.svg';
import { withNavBar } from "../components/NavBar";

const Home = () => {
  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: 'wagmi!',
  });

  return <Grid fluid>
    <Row center="xs">
      <Col xs={6}>
        <img src={pepeMeme} alt="pepe meme" />
        <Row start="xs">
          <Col>
            <h1>Hello maker, we hope this boilerplate helps you building awesome dapps!</h1>
            <br />
            <p>We encorage you to visit our Github to know more about our boilerplate and its features</p>
            <p>Below you can find a test signature so you can test some of it</p>
            <br />
          </Col>
        </Row>
      </Col>
    </Row>
    <Row center="xs">
      <StyledButton disabled={isLoading} onClick={() => signMessage()}>
        Test sign `wagmi!` message!
      </StyledButton>
    </Row>
    <Row center="xs">
      <Col>{isSuccess && <div>Signature: <pre>{data}</pre></div>}</Col>
    </Row>
    <Row center="xs">
      <Col>{isError && <div>Error signing message</div>}</Col>
    </Row>
  </Grid>;
};

export default withNavBar(Home);
