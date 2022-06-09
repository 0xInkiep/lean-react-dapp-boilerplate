import React, { useState } from "react";
import styled from "styled-components";
import { useSendTransaction } from 'wagmi';

import { Grid, Row, Col } from 'react-flexbox-grid';

import CONSTANTS from "../constants";
import StyledButton from "../components/StyledButton";
import { BigNumber } from "ethers";
import { withNavBar } from "../components/NavBar";
import dudeWithSign from '../../assets/img/contribute.jpg';

const convertDecimalAmountToWei = (n) => parseInt(n * 1e18, 10);
const Credits = () => {
  const [donationValue, setDonationValue] = useState(0.1);

  const { error, sendTransaction, isSuccess, isLoading, isError } = useSendTransaction({
    request: {
      to: CONSTANTS.donationAddress,
      value: BigNumber.from(convertDecimalAmountToWei(donationValue).toLocaleString('fullwide', { useGrouping: false })),
    }
  });

  return <Grid fluid>
    <Row center="xs">
      <Col xs={4}>
        <img src={dudeWithSign} width="300" alt="will code for eth" />
        <p>Help us with a small donation to mantain and keep improving this boilerplate. ♥️</p>
      </Col>
    </Row>
    <br />
    <Row center="xs">
      <Col xs={6}>
        <StyledInput type="number" min="0.01" max="1" step="0.01" value={donationValue} onChange={(e) => setDonationValue(e.target.value) } />
      </Col>
    </Row>
    <br />
    <Row center="xs">
      <StyledButton disabled={isLoading} onClick={() => sendTransaction()}>
        Contribute with {donationValue} ETH!
      </StyledButton>
    </Row>
    <Row center="xs">
      <Col>{isLoading && <p>Connect to your wallet to contribute!</p>}</Col>
    </Row>
    <Row center="xs">
      <Col>{isSuccess && <h1>Thank you for contributing to support this project!</h1>}</Col>
    </Row>
    <Row center="xs">
      <Col>{isError && <div>{error.message}</div>}</Col>
    </Row>
  </Grid>;
};

export default withNavBar(Credits);

const StyledInput = styled.input`
  font-size: 32px;
  color: #fff;
  background-color: transparent;
  border-color: blue;
  text-align: center;
`;
