import { ethers } from "ethers";
import { useState, useEffect } from "react";

function WalletConect() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [correctNetwork, setCorrectNetwork] = useState(false);
  const { Contract } = require("ethers");
  const underlyingDecimals = 18;

  const options = {
    address: currentAccount, // your (target) address
    provider: ethers.getDefaultProvider("kovan"), // network = mainnet/testnet/etc (you can omit network if your target is mainnet)
  };

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;
    if (ethereum) {
      console.log("Got the ethereum obejct: ", ethereum);
    } else {
      console.log("No Wallet found. Connect Wallet");
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      console.log("Found authorized Account: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } else {
      console.log("No authorized account found");
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Metamask not detected");
        return;
      }
      let chainId = await ethereum.request({ method: "eth_chainId" });
      console.log("Connected to chain:" + chainId);

      const kovanChainId = "0x2a";

      if (chainId !== kovanChainId) {
        alert("You are not connected to the Kovan Testnet!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Found account", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log("Error connecting to metamask", error);
    }
  };

  const checkCorrectNetwork = async () => {
    const { ethereum } = window;
    let chainId = await ethereum.request({ method: "eth_chainId" });
    console.log("Connected to chain:" + chainId);

    const kovanChainId = "0x2a";

    if (chainId !== kovanChainId) {
      setCorrectNetwork(false);
    } else {
      setCorrectNetwork(true);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    checkCorrectNetwork();
  }, []);
  return (
    <div>
      <h2 className=" ">NFixtureT Generator</h2>
      {currentAccount === "" ? (
        <button className="" onClick={connectWallet}>
          Connect Wallet
        </button>
      ) : correctNetwork ? (
        <div> </div>
      ) : (
        <div className="">
          <div>----------------------------------------</div>
          <div>Please connect to the Kovan Testnet</div>
          <div>and reload the page</div>
          <div>----------------------------------------</div>
        </div>
      )}
    </div>
  );
}

export default WalletConect;
