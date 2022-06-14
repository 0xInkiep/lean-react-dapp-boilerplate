import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';

import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [chain.mainnet],
  [
    publicProvider(),
  ],
);

const { connectors } = getDefaultWallets({
  appName: 'React dApp',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

import React from "react";
import GlobalStyle from './styles/global';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './screens/Home';
import Credits from './screens/Credits';

const Dapp = () => <WagmiConfig client={wagmiClient}>
  <RainbowKitProvider chains={chains}>
    <GlobalStyle />
    <Router basename={location.hostname == '0xinkiep.github.io' ? 'https://0xinkiep.github.io/lean-react-dapp-boilerplate/' : undefined}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/credits" element={<Credits />} />
      </Routes>
    </Router>
  </RainbowKitProvider>
</WagmiConfig>;

export default Dapp;
