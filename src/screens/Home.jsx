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
        <Row start="xs">
          <Col>
            <h2>Hello maker, we hope this boilerplate helps you building awesome dapps!</h2>
            <br />
            <p>We encourage you to visit our Github to know more about our boilerplate and its features</p>
            <br />
            <p>Below you can find a test signature so you can test it <b>without making a transaction</b></p>
            <br />
          </Col>
        </Row>
      </Col>
    </Row>
    <Row center="xs">
      <StyledButton disabled={isLoading} onClick={() => signMessage()}>
        Test signing `wagmi!` message!
      </StyledButton>
    </Row>
    <Row center="xs">
      <Col xs={12}><br /><img width={300} src={pepeMeme} alt="pepe meme" /></Col>
    </Row>
    <Row center="xs">
      <Col>{isSuccess && <div>Signature: <pre>{data}</pre></div>}</Col>
      <Col>{isError && <div>Error signing message</div>}</Col>
    </Row>
  </Grid>;
};

export default withNavBar(Home);
